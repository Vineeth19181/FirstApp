
import { Routes } from '@angular/router';

import { AddPropertyComponent } from './property/add-property/add-property.component';
import { AppComponent } from './app.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';


export const routes: Routes = [

    {path: '', component: PropertyListComponent}  ,
    {path: 'rent-property', component: PropertyListComponent}  ,
    {path: 'property-detail/:id', component: PropertyDetailComponent}  ,
 {path: 'add-property', component: AddPropertyComponent}   
 
];
