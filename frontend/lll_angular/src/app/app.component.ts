import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  template: `<h1>{{ message }}</h1>`,
})
export class AppComponent implements OnInit {
  title = 'lll_angular';
  message = 'Loading...';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTest().subscribe(
      data => this.message = data,
      err => this.message = 'Error connecting to API'
    );
  }
}
