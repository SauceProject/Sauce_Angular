import { Component, Input, OnInit } from '@angular/core';
import { RecipeServices } from 'src/app/Services/RecipeServices';
import { Recipe } from './../../../models/Recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe:Recipe= new Recipe();
  
  constructor() {   }

  ngOnInit(): void {
  }

}
