import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Chart from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  stocks = [];
  connection;
  stock;
  stockData = [];
  stockForm: FormGroup;
  myChart: any;

  constructor(
    private fb: FormBuilder,
    private socketService: SocketService
  ) { }

  deleteStock(index) {
    // send removal request to server
    this.socketService.deleteStock(this.stocks[index].symbol);
  }

  sendStock() {
    // check if form is valid
    if (this.stockForm.valid && this.stockForm.value.stock.trim().length > 0) {
      this.stock = this.stockForm.value.stock.trim().toUpperCase();
      this.socketService.sendStock(this.stock);
      this.stockForm.reset();
      this.stockForm = new FormGroup({
        stock: new FormControl()
      });
      this.stock = '';
    }
  }

  ngOnInit() {
    this.connection = this.socketService.getStocks().subscribe(
      stock => {
        if (stock['type'] == 'new-stock') {
          let push = true;
          for (let i = 0; i < this.stocks.length; i++) {
            if (this.stocks[i].symbol == stock['symbol']) {
              push = false;
            }
          }
          if (push) {
            this.stocks.push(stock);
            this.stockData.push(stock['historic']);
            this.destroyGraph();
            this.drawGraph();
          }
        } else if (stock['type'] == 'del-stock') {
          let removeIndex;
          for (let i = 0; i < this.stocks.length; i++) {
            if (this.stocks[i].symbol == stock['symbol']) {
              removeIndex = i;
            }
          }
          if (removeIndex != undefined) {
            this.stockData.splice(removeIndex, 1);
            this.stocks.splice(removeIndex, 1);
            this.destroyGraph();
            if (this.stockData.length > 0) {
              this.drawGraph();
            } else {
              this.removeGraph();
            }
          }
        }
      }
    );
    console.log('this.stocks:', this.stocks);
    console.log('this.stockData:', this.stockData);
    this.buildForm();
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  // fix for chart.js glitch where old chart data is displayed on hover
  destroyGraph() {
    let oldCanvas = document.getElementById('graph');
    const graphArea = document.getElementById('graph-area');
    if (oldCanvas != null) {
      graphArea.removeChild(oldCanvas);
    }
    const newCanvas = document.createElement('canvas');
    newCanvas.id = 'graph';
    graphArea.appendChild(newCanvas);
  }

  removeGraph() {
    let oldCanvas = document.getElementById('graph');
    const graphArea = document.getElementById('graph-area');
    if (oldCanvas != null) {
      graphArea.removeChild(oldCanvas);
    }
  }

  drawGraph() {
    const canvas = <HTMLCanvasElement> document.getElementById('graph');
    const ctx = canvas.getContext('2d');

    // Chart defaults
    Chart.defaults.global.defaultFontSize = 16;

    // dataset constants
    const colorArray = [
      'rgba(51,102,204,0.3)',
      'rgba(220,57,18,0.3)',
      'rgba(255,153,0,0.3)',
      'rgba(16,150,24,0.3)',
      'rgba(153,0,153,0.3)',
      'rgba(59,62,172,0.3)',
      'rgba(0,153,198,0.3)',
      'rgba(221,68,119,0.3)',
      'rgba(102,170,0,0.3)',
      'rgba(184,46,46,0.3)',
      'rgba(49,99,149,0.3)',
      'rgba(153,68,153,0.3)',
      'rgba(34,170,153,0.3)',
      'rgba(170,170,17,0.3)',
      'rgba(102,51,204,0.3)',
      'rgba(230,115,0,0.3)',
      'rgba(139,7,7,0.3)',
      'rgba(50,146,98,0.3)',
      'rgba(85,116,166,0.3)',
      'rgba(59,62,172,0.3)'
    ];
    const monthAbbr = [
      'JAN',
      'FEB',
      'MAR',
      'APR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC'
    ];
    const lineTension = 0;
    const fill = false;
    const borderWidth = 4;
    const pointBorderWidth = 0;
    const pointRadius = 0;
    const pointHitRadius = 6;
    const borderJoinStyle = 'miter';
    const borderCapStyle = 'butt';

    // loop through this.stockData and build data objects
    let labels = [];
    if (this.stockData.length > 0) {
      for (let i = 0; i < this.stockData[0].length; i++) {
        labels.push(this.stockData[0][i][1]);
      }
      let data = {
        labels,
        datasets: []
      };
      for (let i = 0; i < this.stockData.length; i++) {
        let stockPrices = [];
        for (let j = 0; j < this.stockData[i].length; j++) {
          stockPrices.push(this.stockData[i][j][2]);
        }
        let newStock = {
          label: this.stockData[i][0][0],
          lineTension,
          data: stockPrices,
          fill,
          backgroundColor: colorArray[i % 20],
          borderColor: colorArray[i % 20],
          borderWidth,
          pointBorderWidth,
          pointRadius,
          pointHitRadius,
          borderJoinStyle,
          borderCapStyle
        }
        data.datasets.push(newStock);
      }

      const options = {
        maintainAspectRatio: false,
        tooltips: {
          displayColors: false,
          callbacks: {
            title: function(tooltipItem) {
              const rawDate = this._data.labels[tooltipItem[0].index];
              const fullYear = rawDate.substring(0,4);
              const monthNumber = rawDate.substring(5,7);
              const dayNumber = rawDate.substring(8,10);
              return monthAbbr[Number(monthNumber - 1)] + ' ' + String(Number(dayNumber)) + ', ' + fullYear;
            }
          }
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            },
            display: true,
            ticks: {
              beginAtZero: false,
              autoSkip: false,
              maxRotation: 0,
              minRotation: 0,
              callback: function(value, index) {
                if ((index + 3) % 22 == 0) {
                  const rawDate = value;
                  const year2Digit = rawDate.substring(2,4);
                  const monthNumber = rawDate.substring(5,7);
                  return monthAbbr[Number(monthNumber - 1)] + ' \'' + year2Digit;
                }
              }
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
      }

      this.myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
      });

    }

  }

  buildForm() {
    this.stockForm = new FormGroup({
      stock: new FormControl()
    });
  }  

  formErrors = {
    'stock': ''
  }

  validationMessages = {
    'stock': {
      'required': 'A stock symbol is required.'
    }
  }

}
