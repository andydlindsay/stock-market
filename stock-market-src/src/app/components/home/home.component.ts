import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  stocks = [];
  connection;
  stock;
  stockForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private socketService: SocketService
  ) { }

  deleteStock(index) {
    // send removal request to server
    this.stocks.splice(index, 1);
  }

  sendStock() {
    // check if form is valid
    if (this.stockForm.valid && this.stockForm.value.stock.trim().length > 0) {
      this.stock = this.stockForm.value.stock.toUpperCase();
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
        console.log(this.stocks.indexOf(stock));
        let push = true;
        for (let i = 0; i < this.stocks.length; i++) {
          if (this.stocks[i].symbol == stock['symbol']) {
            push = false;
          }
        }
        if (push) {
          this.stocks.push(stock);
        }
      }
    );
    console.log('this.stocks:', this.stocks);
    this.buildForm();
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
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
