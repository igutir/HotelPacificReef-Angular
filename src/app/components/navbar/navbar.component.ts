import { Component } from '@angular/core';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  foods: Food[] = [
    {value: 'standar-0', viewValue: 'Standar'},
    {value: 'premium-1', viewValue: 'Premium'},

  ];
}
