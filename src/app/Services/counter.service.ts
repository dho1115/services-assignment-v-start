import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  active: number = 0;
  inactive: number = 0;
  total: number = 0;

  constructor() { }

  addToActive() {
    ++ this.active;
    this.total = this.active + this.inactive;
    console.log({ active: this.active, inactive: this.inactive, total: this.total });
  }

  addToInactive() {
    ++ this.inactive;
    this.total = this.inactive + this.active;
    console.log({ active: this.active, inactive: this.inactive, total: this.total });
  }
}
