import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
  title: string;
  people: any[];
  isVisible = true;

  // tslint:disable-next-line:typedef
  changeVisibility() {
    this.isVisible = !this.isVisible;
  }

  constructor(private dataService: DataService) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.title = 'Customers';
    this.dataService.getCustomers()
      .subscribe((customers: ICustomer[]) => this.people = customers);
    // this.people =  [
    //   {id : 1, name : 'Muhammad Usman', city : 'Jand, Attock', orderTotal : 10.99,
    //     customerSince: new Date(2020, 7, 10)},
    //   {id : 2, name : 'Imran Haider', city : 'Islamabad', orderTotal : 20.99,
    //     customerSince: new Date(2019, 7, 11)},
    //   {id : 3, name : 'Najam Ul Saqib', city : 'Sialkot', orderTotal : 30.99,
    //     customerSince: new Date(2010, 2, 9)},
    //   {id : 4, name : 'Uzair Abbas', city : 'Bhaker', orderTotal : 5.99,
    //     customerSince: new Date(2005, 2, 9)},
    //   {id : 5, name : 'Rasheed Kareem', city : 'Bhaker', orderTotal : 1000.99,
    //     customerSince: new Date(2009, 2, 9)},
    //   {id : 6, name : 'Nouman Javed', city : 'Islamabad', orderTotal : 68.99,
    //     customerSince: new Date(2001, 2, 9)},
    //   {id : 7, name : 'Waheed Murad', city : 'Karachi', orderTotal : 70.99,
    //     customerSince: new Date(2000, 2, 9)},
    //   {id : 8, name : 'Muhammad Ahmed', city : 'Rangli', orderTotal : 15.99,
    //     customerSince: new Date(2012, 2, 9)},
    //   {id : 9, name : 'Imran Abbas', city : 'Rawalpindi', orderTotal : 55.99,
    //     customerSince: new Date(2011, 2, 9)},
    //   {id : 10, name : 'Ghansfer Ahmed', city : 'Kashmir', orderTotal : 51.99,
    //     customerSince: new Date(2003, 2, 9)},
    // ];

  }
}
