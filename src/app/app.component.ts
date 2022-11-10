import { Component } from '@angular/core';
import { CounterService } from './Services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(protected counterService: CounterService) {

  }
}
