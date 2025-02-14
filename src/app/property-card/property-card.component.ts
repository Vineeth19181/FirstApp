import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  imports: [],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {

  Property: any ={
    "Id": 1,
    "Type":"House",
    "Name": "Individual House",
    "Price": 100000

  }

}
