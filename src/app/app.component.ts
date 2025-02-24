import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
//import { PropertyCardComponent } from './property-card/property-card.component';
//import { PropertyListComponent } from './property-list/property-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chandu-angular';
}
