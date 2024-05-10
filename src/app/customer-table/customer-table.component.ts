import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import { EditCustomerService } from '../services/edit-customer.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.css'
})
export class CustomerTableComponent implements OnInit {
  public customers: Customer[] = [];
  title: string = '';
  customers$: Observable<Customer[]>;

  constructor(
    private editCustomerService: EditCustomerService,
    private customerService: CustomerService
  ) {
    this.customers$ = this.customerService.getCustomers();

  }

  ngOnInit(): void {
   // this.customers = [
     // new Customer(1, 'Company A', 'New York', 'John Doe'),
      //new Customer(2, 'Company B', 'Los Angeles', 'Jane Smith'),
    //];

    this.getCustomersObs();
  }

  getCustomersObs(): void {
    this.customerService.getCustomers().subscribe({
      next: (response) => {
        console.log(response);
        this.customers = <any>response;
        console.log(this.customers);
      },
      error: (err) => {
        alert('Error occurred');
      },
    });
  }
  getCustomers(): void {
    this.customerService.getCustomers().subscribe({
      next: (response) => {
        console.log(response);
        this.customers = <any>response;
        console.log(this.customers);
      },
      error: (err) => {
        alert('Error occurred');
      },
    });
  }
  openEditCustomer(customer: Customer): void {
    this.title = 'Edit';
    this.editCustomerService.isAddingCustomer = false;
    this.editCustomerService.setCustomer(customer);
    this.editCustomerService.open();
  }
}
