import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder } from '../shared/interfaces';

@Injectable()
export class DataService{
  baseUrl = 'assets/';

  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
      .pipe(
        catchError(this.handelError)
      );
  }

  getCustomer(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
      .pipe(
        map(customers => {
          const customer = customers.filter((cust: ICustomer) => cust.id === id);
          return (customer && customer.length) ? customer[0] : null;
        }),
        catchError(this.handelError)
      );
  }

  getOrders(id: number): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.baseUrl + 'order.json')
      .pipe(
        map(orders => {
          const custOrders = orders.filter((order: IOrder) => order.customerId === id);
          return custOrders;
        }),
        catchError(this.handelError)
      );
  }


  // tslint:disable-next-line:typedef
  private handelError(error: any) {
    console.error('server error', error);
    if ( error.error instanceof Error ) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
