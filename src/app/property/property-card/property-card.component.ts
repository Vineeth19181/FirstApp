import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  imports: [],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {

  Property = {
    "Id": 1,
    "Type":"Independent House with Garage",
    "Name": "Property1",
    "Price":500,
  }

  Property2 = {
    "Id": 2,"Type":"Independent House No Garage","Name": "Porperty 2","Price":5000,
  }

  Property3 = {
    "Id": 3,"Type":"Independent Modern House","Name": "Property 3","Price":10000,
  }


}

