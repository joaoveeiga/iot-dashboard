import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dashboard';
  maxValue: number = 0;
  totalValues: number = 0;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchMaxValue();
  }

  fetchMaxValue() {
    this.http.get<any>('http://192.168.1.20:5000/api/max_value').subscribe(
      response => {
        this.maxValue = response.max_value;
        this.totalValues = response.total_values;
      },
      error => {
        console.error('Error fetching max value:', error);
      }
    );
  }
  graph1Url = 'http://192.168.1.20:5000/api/graph1';
  graph2Url = 'http://192.168.1.20:5000/api/graph2';
}
