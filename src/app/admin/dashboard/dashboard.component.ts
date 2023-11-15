import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  offerForm! : FormGroup;  

  offers: any[] = []; 

  constructor(
    private formBuilder: FormBuilder,
  ){};

  ngOnInit(): void {
    this.initOfferForm()
  };

  initOfferForm(): void {
    this.offerForm = this.formBuilder.group({
      index: [0],
      title: ["", [Validators.required, Validators.maxLength(100)]],
      brand: "",
      model: "",
      description: "",
      price: 0
    });
  }

  onSubmitOfferForm() : void {    
    const offerIndex = this.offerForm.value.index;
    let offer = this.offerForm.value

     if(offerIndex == null || offerIndex == undefined) {
    delete offer.index;
    this.offers.push(offer);
    }
    else {
      delete offer.index;
      this.offers[offerIndex] = offer;
    }

    this.offerForm.reset();
    console.log(this.offers);    
  }

  onEditOffer(offer: any, index: number): void {
    this.offerForm.setValue({...offer, index});    
  }

  onDeleteOffer(index: number): void {
    this.offers.splice(index, 1)
  }

}
