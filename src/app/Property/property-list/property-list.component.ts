import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-property-list',
  standalone:true,
  imports: [PropertyCardComponent,NgFor],
  templateUrl: './property-list.component.html',
  styleUrls:['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{
  properties: Array<any>=[];

  constructor(private http: HttpClient){

  }
  ngOnInit(): void{
  this.http.get<Array<any>>('Data/properties.json').subscribe(
    (data)=>{
      this.properties=data;
      console.log('properties loaded',this.properties);
    },
    (error) =>{
      console.error('Error fetching properties:', error)
    }
  );
  }

}
