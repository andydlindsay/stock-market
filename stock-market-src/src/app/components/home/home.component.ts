import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  stocks = [];
  connection;
  stock;

  constructor(
    private socketService: SocketService
  ) { }

  sendStock() {
    this.socketService.sendStock(this.stock);
    this.stock = '';
  }

  ngOnInit() {
    this.connection = this.socketService.getStocks().subscribe(
      stock => {
        this.stocks.push(stock);
      }
    );
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  

}
