import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { HttpClient } from '@angular/common/http';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-property-list',
  imports: [CommonModule, PropertyCardComponent],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit {
  properties: IProperty[] = [];
  constructor(private housingService: HousingService) { }
  ngOnInit(): void {

    this.housingService.getAllProperties().subscribe(
      (data: IProperty[]) => {
        this.properties = data;
      },
      (error) => {
        console.error('Error fetching properties', error);
      }
    );

    

    //this.housingService.getAllproperties().subscribe(
     // data => {
    ////    this.properties = data;
   //   }

  //  );

    //this.tt! = this.http.get<Array<any>>('assets/data/properties.json');

    //this.http.get('assets/data/properties.json').subscribe(
    //data => {

    // this.properties=data;
    ////  console.log('hhh');
    //  console.log(data);
    //  console.log('ddd');
    // }
    //);

    // console.log(this.tt);

  }

}
