import { Component, Input, OnInit } from '@angular/core';
import { ingerdientviewmodel } from 'src/app/models/IngerdientViewModel';
import { ingerdientServices } from 'src/app/Services/ingerdientservices';

@Component({
  selector: 'app-ingerdient-cards',
  templateUrl: './ingerdient-cards.component.html',
  styleUrls: ['./ingerdient-cards.component.css']
})
export class IngerdientCardsComponent implements OnInit {

  constructor( private ingerdientServices:ingerdientServices) { }
  
@Input() ingerdient:ingerdientviewmodel = new ingerdientviewmodel()

  ngOnInit(): void {
    
  }

}
