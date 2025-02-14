import { Component } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-property-list',
  imports: [PropertyCardComponent,NgFor],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {

  properties: Array<any> = [
    {
      "Id":1,
      "Name":"Individual House",
      "Type":"House",
      "Price":12000
    },
    {
      "Id":1,
      "Name":"Duplex",
      "Type":"House",
      "Price":13000
    },
    {
      "Id":1,
      "Name":"Farm House",
      "Type":"House",
      "Price":14000
    },
    {
      "Id":1,
      "Name":"Vineeth",
      "Type":"House",
      "Price":15000
    },
    {
      "Id":1,
      "Name":"Gopu",
      "Type":"House",
      "Price":16000
    }
            

]



}
