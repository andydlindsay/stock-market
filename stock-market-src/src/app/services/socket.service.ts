import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  private url = 'https://andydlindsay-stock-market.herokuapp.com';
  private socket;

  constructor( ) { }

  sendStock(stock) {
    const newStock = {
      stock,
      type: 'new-stock'
    }
    this.socket.emit('add-stock', newStock);
  }

  deleteStock(stock) {
    const delStock = {
      stock,
      type: 'del-stock'
    }
    this.socket.emit('add-stock', delStock);
  }

  getStocks() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('stock', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

}
