import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-test-page',
  templateUrl: './api-test-page.component.html',
  styleUrls: ['./api-test-page.component.css']
})
export class ApiTestPageComponent implements OnInit {
  message: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTest().subscribe({
      next: (res) => {
        this.message = res;
      },
      error: (err) => {
        this.message = 'Error fetching API message';
        console.error(err);
      }
    });
  }
}
