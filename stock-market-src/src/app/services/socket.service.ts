import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  private url = 'http://localhost:8080';
  private socket;

  constructor() { }

  sendStock(stock) {
    this.socket.emit('add-stock', stock);
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
