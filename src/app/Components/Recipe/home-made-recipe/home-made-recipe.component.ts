import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeServices } from 'src/app/Services/RecipeServices';

@Component({
  selector: 'app-home-made-recipe',
  templateUrl: './home-made-recipe.component.html',
  styleUrls: ['./home-made-recipe.component.css']
})
export class HomeMadeRecipeComponent implements OnInit {
  @Input() recipe:Recipe= new Recipe();
  constructor(private rs:RecipeServices) { }

  ngOnInit(): void {
    console.log(this.recipe)
  }
 

}
