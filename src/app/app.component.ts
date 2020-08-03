import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{



  constructor() {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    // we call a service that gets us the data

  }
}
