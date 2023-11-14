import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  offerForm! : FormGroup;
  
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

  currentCar: any;

  constructor(
    private formBuider: FormBuilder,
  ){};

  ngOnInit(): void {
    this.initOfferForm()
  };

  initOfferForm(): void {
    this.offerForm = this.formBuider.group({
      title: "",
      brand: "",
      model: "",
      description: "",
      price: 0
    });
  }

  onSubmitOfferForm() : void {
    console.log(this.offerForm.value);   
  }

}
