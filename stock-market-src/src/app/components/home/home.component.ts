import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  sendStock() {
    // check if form is valid
    if (this.stockForm.valid) {

      // check if stock symbol is valid

      this.stock = this.stockForm.value.stock.toUpperCase();


      this.socketService.sendStock(this.stock);
      this.stockForm.reset();
      this.stock = '';
    }
  }

  ngOnInit() {
    this.connection = this.socketService.getStocks().subscribe(
      stock => {
        this.stocks.push(stock);
      }
    );
    this.buildForm();
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  buildForm() {
    this.stockForm = this.fb.group({
      'stock': ['', [
        Validators.required
      ]]
    });
    this.stockForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }  

  // onValueChanged function taken from the Angular Cookbook's Form Validation section
  // https://angular.io/docs/ts/latest/cookbook/form-validation.html
  onValueChanged(data?: any) {
    if (!this.stockForm) { return; }
    const form = this.stockForm;

    for (const field in this.formErrors) {
      // clear previous error message if any
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'stock': ''
  }

  validationMessages = {
    'stock': {
      'required': 'A stock is required.'
    }
  }

}
