import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  


  foods: Food[] = [
    {value: 'standar-0', viewValue: 'Standar'},
    {value: 'premium-1', viewValue: 'Premium'},

  ];

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

}
