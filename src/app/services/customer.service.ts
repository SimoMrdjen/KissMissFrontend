import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../constants';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  //private customers = customersData;
  private readonly url = BASE_URL + 'customer';


  constructor(private http: HttpClient) {}

  // OVA METODA JE ZA TESTIRANJE DOBAVLJANJA PODATAKA PREKO CUSTOMERS.TS FAJLA
  // getCustomers(): Observable<Customer[]> {
  //   return of(this.customers);
  // }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url);
  }
  // public users: Customer[] = [];

  // constructor() {
  //   this.users.push(new Customer());
  //   this.users.push(new Customer());
  // }
}
