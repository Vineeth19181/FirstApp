import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-property',
  imports: [],
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})
export class AddPropertyComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    
  }
  onBack(){
   this.router.navigate(['/']);
  
    
  }


}
