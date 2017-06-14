webpackJsonp([1,4],{

/***/ 253:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 253;


/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(280);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Stawks!!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(403),
        styles: [__webpack_require__(395)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_socket_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(279);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* Title */],
            __WEBPACK_IMPORTED_MODULE_8__services_socket_service__["a" /* SocketService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(fb, socketService) {
        this.fb = fb;
        this.socketService = socketService;
        this.stocks = [];
        this.stockData = [];
    }
    HomeComponent.prototype.deleteStock = function (index) {
        // send removal request to server
        this.socketService.deleteStock(this.stocks[index].symbol);
    };
    HomeComponent.prototype.sendStock = function () {
        // check if form is valid
        if (this.stockForm.value.stock != null) {
            if (this.stockForm.valid && this.stockForm.value.stock.trim().length > 0) {
                this.stock = this.stockForm.value.stock.trim().toUpperCase();
                this.socketService.sendStock(this.stock);
                this.stockForm.reset();
                this.stockForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormGroup */]({
                    stock: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* FormControl */]()
                });
                this.stock = '';
            }
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this.socketService.getStocks().subscribe(function (stock) {
            if (stock['type'] == 'new-stock') {
                var push = true;
                for (var i = 0; i < _this.stocks.length; i++) {
                    if (_this.stocks[i].symbol == stock['symbol']) {
                        push = false;
                    }
                }
                if (push) {
                    _this.stocks.push(stock);
                    _this.stockData.push(stock['historic']);
                    _this.destroyGraph();
                    _this.drawGraph();
                }
            }
            else if (stock['type'] == 'del-stock') {
                var removeIndex = void 0;
                for (var i = 0; i < _this.stocks.length; i++) {
                    if (_this.stocks[i].symbol == stock['symbol']) {
                        removeIndex = i;
                    }
                }
                if (removeIndex != undefined) {
                    _this.stockData.splice(removeIndex, 1);
                    _this.stocks.splice(removeIndex, 1);
                    _this.destroyGraph();
                    if (_this.stockData.length > 0) {
                        _this.drawGraph();
                    }
                    else {
                        _this.removeGraph();
                    }
                }
            }
        });
        this.buildForm();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    // fix for chart.js glitch where old chart data is displayed on hover
    HomeComponent.prototype.destroyGraph = function () {
        var oldCanvas = document.getElementById('graph');
        var graphArea = document.getElementById('graph-area');
        if (oldCanvas != null) {
            graphArea.removeChild(oldCanvas);
        }
        var newCanvas = document.createElement('canvas');
        newCanvas.id = 'graph';
        graphArea.appendChild(newCanvas);
    };
    HomeComponent.prototype.removeGraph = function () {
        var oldCanvas = document.getElementById('graph');
        var graphArea = document.getElementById('graph-area');
        if (oldCanvas != null) {
            graphArea.removeChild(oldCanvas);
        }
    };
    HomeComponent.prototype.drawGraph = function () {
        var canvas = document.getElementById('graph');
        var ctx = canvas.getContext('2d');
        // Chart defaults
        __WEBPACK_IMPORTED_MODULE_3_chart_js___default.a.defaults.global.defaultFontSize = 16;
        // dataset constants
        var colorArray = [
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
        var monthAbbr = [
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
        var lineTension = 0;
        var fill = false;
        var borderWidth = 4;
        var pointBorderWidth = 0;
        var pointRadius = 0;
        var pointHitRadius = 6;
        var borderJoinStyle = 'miter';
        var borderCapStyle = 'butt';
        // loop through this.stockData and build data objects
        var labels = [];
        if (this.stockData.length > 0) {
            for (var i = 0; i < this.stockData[0].length; i++) {
                labels.push(this.stockData[0][i][1]);
            }
            var data = {
                labels: labels,
                datasets: []
            };
            for (var i = 0; i < this.stockData.length; i++) {
                var stockPrices = [];
                for (var j = 0; j < this.stockData[i].length; j++) {
                    stockPrices.push(this.stockData[i][j][2]);
                }
                var newStock = {
                    label: this.stockData[i][0][0],
                    lineTension: lineTension,
                    data: stockPrices,
                    fill: fill,
                    backgroundColor: colorArray[i % 20],
                    borderColor: colorArray[i % 20],
                    borderWidth: borderWidth,
                    pointBorderWidth: pointBorderWidth,
                    pointRadius: pointRadius,
                    pointHitRadius: pointHitRadius,
                    borderJoinStyle: borderJoinStyle,
                    borderCapStyle: borderCapStyle
                };
                data.datasets.push(newStock);
            }
            var options = {
                maintainAspectRatio: false,
                tooltips: {
                    displayColors: false,
                    callbacks: {
                        title: function (tooltipItem) {
                            var rawDate = this._data.labels[tooltipItem[0].index];
                            var fullYear = rawDate.substring(0, 4);
                            var monthNumber = rawDate.substring(5, 7);
                            var dayNumber = rawDate.substring(8, 10);
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
                                callback: function (value, index) {
                                    if ((index + 3) % 22 == 0) {
                                        var rawDate = value;
                                        var year2Digit = rawDate.substring(2, 4);
                                        var monthNumber = rawDate.substring(5, 7);
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
            };
            this.myChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js___default.a(ctx, {
                type: 'line',
                data: data,
                options: options
            });
        }
    };
    HomeComponent.prototype.buildForm = function () {
        this.stockForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormGroup */]({
            stock: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* FormControl */]()
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(404),
        styles: [__webpack_require__(396)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(false);
// imports


// module
exports.push([module.i, "/* elements */\nbutton,\nform {\n  font-family: \"Fira Sans\", sans-serif !important;\n  font-size: 1.3em !important; }\n\n.title2size {\n  font-size: 1.6em !important; }\n\n.mat-sidenav {\n  font-family: \"Fira Sans\", sans-serif !important; }\n\n.title-font {\n  font-family: \"Fira Sans\", sans-serif !important; }\n\n.mat-card {\n  font-family: \"Fira Sans\", sans-serif !important;\n  margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 117,
	"./af.js": 117,
	"./ar": 124,
	"./ar-dz": 118,
	"./ar-dz.js": 118,
	"./ar-kw": 119,
	"./ar-kw.js": 119,
	"./ar-ly": 120,
	"./ar-ly.js": 120,
	"./ar-ma": 121,
	"./ar-ma.js": 121,
	"./ar-sa": 122,
	"./ar-sa.js": 122,
	"./ar-tn": 123,
	"./ar-tn.js": 123,
	"./ar.js": 124,
	"./az": 125,
	"./az.js": 125,
	"./be": 126,
	"./be.js": 126,
	"./bg": 127,
	"./bg.js": 127,
	"./bn": 128,
	"./bn.js": 128,
	"./bo": 129,
	"./bo.js": 129,
	"./br": 130,
	"./br.js": 130,
	"./bs": 131,
	"./bs.js": 131,
	"./ca": 132,
	"./ca.js": 132,
	"./cs": 133,
	"./cs.js": 133,
	"./cv": 134,
	"./cv.js": 134,
	"./cy": 135,
	"./cy.js": 135,
	"./da": 136,
	"./da.js": 136,
	"./de": 139,
	"./de-at": 137,
	"./de-at.js": 137,
	"./de-ch": 138,
	"./de-ch.js": 138,
	"./de.js": 139,
	"./dv": 140,
	"./dv.js": 140,
	"./el": 141,
	"./el.js": 141,
	"./en-au": 142,
	"./en-au.js": 142,
	"./en-ca": 143,
	"./en-ca.js": 143,
	"./en-gb": 144,
	"./en-gb.js": 144,
	"./en-ie": 145,
	"./en-ie.js": 145,
	"./en-nz": 146,
	"./en-nz.js": 146,
	"./eo": 147,
	"./eo.js": 147,
	"./es": 149,
	"./es-do": 148,
	"./es-do.js": 148,
	"./es.js": 149,
	"./et": 150,
	"./et.js": 150,
	"./eu": 151,
	"./eu.js": 151,
	"./fa": 152,
	"./fa.js": 152,
	"./fi": 153,
	"./fi.js": 153,
	"./fo": 154,
	"./fo.js": 154,
	"./fr": 157,
	"./fr-ca": 155,
	"./fr-ca.js": 155,
	"./fr-ch": 156,
	"./fr-ch.js": 156,
	"./fr.js": 157,
	"./fy": 158,
	"./fy.js": 158,
	"./gd": 159,
	"./gd.js": 159,
	"./gl": 160,
	"./gl.js": 160,
	"./gom-latn": 161,
	"./gom-latn.js": 161,
	"./he": 162,
	"./he.js": 162,
	"./hi": 163,
	"./hi.js": 163,
	"./hr": 164,
	"./hr.js": 164,
	"./hu": 165,
	"./hu.js": 165,
	"./hy-am": 166,
	"./hy-am.js": 166,
	"./id": 167,
	"./id.js": 167,
	"./is": 168,
	"./is.js": 168,
	"./it": 169,
	"./it.js": 169,
	"./ja": 170,
	"./ja.js": 170,
	"./jv": 171,
	"./jv.js": 171,
	"./ka": 172,
	"./ka.js": 172,
	"./kk": 173,
	"./kk.js": 173,
	"./km": 174,
	"./km.js": 174,
	"./kn": 175,
	"./kn.js": 175,
	"./ko": 176,
	"./ko.js": 176,
	"./ky": 177,
	"./ky.js": 177,
	"./lb": 178,
	"./lb.js": 178,
	"./lo": 179,
	"./lo.js": 179,
	"./lt": 180,
	"./lt.js": 180,
	"./lv": 181,
	"./lv.js": 181,
	"./me": 182,
	"./me.js": 182,
	"./mi": 183,
	"./mi.js": 183,
	"./mk": 184,
	"./mk.js": 184,
	"./ml": 185,
	"./ml.js": 185,
	"./mr": 186,
	"./mr.js": 186,
	"./ms": 188,
	"./ms-my": 187,
	"./ms-my.js": 187,
	"./ms.js": 188,
	"./my": 189,
	"./my.js": 189,
	"./nb": 190,
	"./nb.js": 190,
	"./ne": 191,
	"./ne.js": 191,
	"./nl": 193,
	"./nl-be": 192,
	"./nl-be.js": 192,
	"./nl.js": 193,
	"./nn": 194,
	"./nn.js": 194,
	"./pa-in": 195,
	"./pa-in.js": 195,
	"./pl": 196,
	"./pl.js": 196,
	"./pt": 198,
	"./pt-br": 197,
	"./pt-br.js": 197,
	"./pt.js": 198,
	"./ro": 199,
	"./ro.js": 199,
	"./ru": 200,
	"./ru.js": 200,
	"./sd": 201,
	"./sd.js": 201,
	"./se": 202,
	"./se.js": 202,
	"./si": 203,
	"./si.js": 203,
	"./sk": 204,
	"./sk.js": 204,
	"./sl": 205,
	"./sl.js": 205,
	"./sq": 206,
	"./sq.js": 206,
	"./sr": 208,
	"./sr-cyrl": 207,
	"./sr-cyrl.js": 207,
	"./sr.js": 208,
	"./ss": 209,
	"./ss.js": 209,
	"./sv": 210,
	"./sv.js": 210,
	"./sw": 211,
	"./sw.js": 211,
	"./ta": 212,
	"./ta.js": 212,
	"./te": 213,
	"./te.js": 213,
	"./tet": 214,
	"./tet.js": 214,
	"./th": 215,
	"./th.js": 215,
	"./tl-ph": 216,
	"./tl-ph.js": 216,
	"./tlh": 217,
	"./tlh.js": 217,
	"./tr": 218,
	"./tr.js": 218,
	"./tzl": 219,
	"./tzl.js": 219,
	"./tzm": 221,
	"./tzm-latn": 220,
	"./tzm-latn.js": 220,
	"./tzm.js": 221,
	"./uk": 222,
	"./uk.js": 222,
	"./ur": 223,
	"./ur.js": 223,
	"./uz": 225,
	"./uz-latn": 224,
	"./uz-latn.js": 224,
	"./uz.js": 225,
	"./vi": 226,
	"./vi.js": 226,
	"./x-pseudo": 227,
	"./x-pseudo.js": 227,
	"./yo": 228,
	"./yo.js": 228,
	"./zh-cn": 229,
	"./zh-cn.js": 229,
	"./zh-hk": 230,
	"./zh-hk.js": 230,
	"./zh-tw": 231,
	"./zh-tw.js": 231
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 399;


/***/ }),

/***/ 403:
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n"

/***/ }),

/***/ 404:
/***/ (function(module, exports) {

module.exports = "<!-- stock chart -->\n<div id=\"chart\">\n  <md-card>\n    <md-card-content>\n      <md-toolbar>Stocket</md-toolbar>\n      <div id=\"graph-area\">\n        <div *ngIf=\"!stockData.length > 0\">\n          <h1 class=\"text-center\">Enter a stock symbol below to get started!</h1>\n        </div>\n      </div>\n    </md-card-content>\n  </md-card>\n</div>\n\n\n<!-- stock cards -->\n<div class=\"flex-container\">\n  <div *ngFor=\"let stock of stocks; let myIndex = index\">\n    <md-card>\n      <md-toolbar class=\"{{ 'color' + (myIndex % 20) }}\">\n        {{ stock.symbol }}&nbsp;({{ stock.exchange }})\n        <span class=\"app-toolbar-filler\"></span>\n        <button md-button (click)=\"deleteStock(myIndex)\">X</button>\n      </md-toolbar>\n      <md-card-content>\n        <h3 class=\"padding-top-16 padding-left-16 margin-bottom-8 padding-right-16\">{{ stock.name }}</h3>\n        <h3 class=\"padding-left-16 margin-top-8\" *ngIf=\"stock.currency == 'USD' && stock.currentPrice != null\">${{ stock.currentPrice + ' (' + stock.percentChange + ')' }}</h3>\n        <h3 class=\"padding-left-16 margin-top-8\" *ngIf=\"stock.currency != 'USD' && stock.currentPrice != null\">{{ stock.currentPrice }}</h3>\n        <h3 class=\"padding-left-16 margin-top-8\" *ngIf=\"stock.currentPrice == null\">No current price data available</h3>\n      </md-card-content>\n    </md-card>\n  </div>\n</div>\n\n<!--add a stock form -->\n<div class=\"flex-container\" id=\"stock-form\">\n  <md-card>\n    <md-card-content>\n      <form [formGroup]=\"stockForm\">\n        <md-input-container>\n          <!-- mdAutocomplete=\"\" -->\n          <input type=\"text\" mdInput placeholder=\"Enter a stock symbol (e.g. GOOG)\" formControlName=\"stock\" id=\"stock\">\n        </md-input-container>\n        <div class=\"flex-container\">\n          <span class=\"app-toolbar-filler\"></span>\n          <button type=\"submit\" md-raised-button color=\"primary\" (click)=\"sendStock()\">Add</button>\n          <span class=\"app-toolbar-filler\"></span>\n        </div>\n      </form>\n    </md-card-content>\n  </md-card>\n</div>\n"

/***/ }),

/***/ 459:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(254);


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = (function () {
    function SocketService() {
        this.url = 'https://andydlindsay-stock-market.herokuapp.com';
    }
    SocketService.prototype.sendStock = function (stock) {
        var newStock = {
            stock: stock,
            type: 'new-stock'
        };
        this.socket.emit('add-stock', newStock);
    };
    SocketService.prototype.deleteStock = function (stock) {
        var delStock = {
            stock: stock,
            type: 'del-stock'
        };
        this.socket.emit('add-stock', delStock);
    };
    SocketService.prototype.getStocks = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(_this.url);
            _this.socket.on('stock', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SocketService);

//# sourceMappingURL=socket.service.js.map

/***/ })

},[460]);
//# sourceMappingURL=main.bundle.js.map