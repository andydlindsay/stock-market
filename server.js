const express = require('express'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      morgan = require('morgan'),
      path = require('path'),
      bodyParser = require('body-parser'),
      http = require('http'),
      https = require('https');

// require dotenv to populate environment variables
require('dotenv').config();

// load config
const config = require('config');

// use bluebird for Mongoose promises
mongoose.Promise = require('bluebird');

// allowed origins
const allowedOrigins = 'http://localhost:8080';

// create express app
const app = express();
const httpServer = http.Server(app);
const io = require('socket.io')(httpServer);

// set up mongoose/mongo connection
// build db uri
let dbURI = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@ds129090.mlab.com:29090/stock-market';

// change database uri if testing
if (config.util.getEnv('NODE_ENV') == 'test') {
    dbURI = 'mongodb://localhost:27017/stockmarkettest';
}

// connect to the database
mongoose.connect(dbURI);

// on error
mongoose.connection.on('error', (err) => {
    console.info('Database error: ' + err);
});

// port number
const port = process.env.PORT || 8080;

// use morgan logger except during testing
if (config.util.getEnv('NODE_ENV') !== 'test') {
    app.use(morgan('combined'));
}

// cors middleware
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, 'client')));

// set up express app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// catchall redirect
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'));
});

// socket connection
io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('add-stock', (stock) => {
        console.log('stock:', stock.stock.trim());
        if (stock.type == 'new-stock') {
            if (stock.stock.trim().length > 0) {
                let body ='';
                // check if there is data for the stock symbol
                const dateString = '20160613';
                const baseUrl = 'https://www.quandl.com/api/v3/datatables/WIKI/PRICES.json?ticker=';
                https.get(baseUrl + stock.stock + '&qopts.columns=ticker,date,close&date.gt=' + dateString + '&api_key=' + process.env.QUANDL_API_KEY, (res) => {
                    body = '';
                    res.setEncoding('utf8');
                    res.on('data', (chunk) => {
                        body += chunk;
                    });
                    res.on('end', () => {
                        const data = JSON.parse(body).datatable;
                        if (data.data.length > 0) {
                            console.log('good stock');
                            // request stock information from api
                            http.get('http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quotes where symbol = \'' + stock.stock + '\'&format=json&env=store://datatables.org/alltableswithkeys&callback=', (res) => {
                                res.setEncoding('utf8');
                                body = '';
                                res.on('data', (chunk) => {
                                    body += chunk;
                                });
                                res.on('end', () => {
                                    const stockInfo = JSON.parse(body).query.results.quote;
                                    let stockType = 'new-stock';
                                    // console.log('stockInfo:', stockInfo);
                                    if (stockInfo.Name != null) {
                                        io.emit('stock', { 
                                            type: stockType,
                                            symbol: stock.stock,
                                            name: stockInfo.Name,
                                            percentChange: stockInfo.PercentChange,
                                            currentPrice: stockInfo.Bid,
                                            currency: stockInfo.Currency,
                                            exchange: stockInfo.StockExchange,
                                            historic: data.data
                                        });
                                    }
                                });
                            });
                        }
                    });
                });
            }
        } else if (stock.type == 'del-stock') {
            io.emit('stock', { 
                type: 'del-stock',
                symbol: stock.stock
            });
        }
    });

});

// server start
const server = app.listen(port, () => {
    console.info('Server listening on port %s\n', port);
});

io.listen(server);