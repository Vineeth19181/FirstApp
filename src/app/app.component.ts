import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavBarComponent,PropertyListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-property-app';
}
