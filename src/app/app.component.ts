import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cars = [
    {
      id: 0,
      brand: 'Renault',
      model: 'Laguna',
      color: 'gray'
    },
    {
      id: 1,
      brand: 'Peugeot',
      model: '508',
      color: 'red'
    },
    {
      id: 2,
      brand: 'Opel',
      model: 'Corsa',
      color: 'blue'
    }
  ];

  

}
