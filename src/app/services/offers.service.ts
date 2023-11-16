import { Injectable } from '@angular/core';
import { Offer } from '../interfaces/offer';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private offers: Offer[] = [

    {
      title: "Nouvelle annonce",
      brand: "Citroen",
      model: "DS3",
      description: "Superbe voiture",
      price: 9683
    }

  ];

  getOffer(): Offer[] {
    return this.offers
  }

  createOffer(offer: Offer): Offer[] {
    this.offers.push(offer);
    return this.offers
  }

  editOffer(offer: Offer, index: number ): Offer[] {
    this.offers[index] = offer;
    return this.offers
  }

  deleteOffer(offerIndex: number): Offer[] {
    this.offers.splice(offerIndex, 1);
    return this.offers;
  }

  constructor() { }
}
