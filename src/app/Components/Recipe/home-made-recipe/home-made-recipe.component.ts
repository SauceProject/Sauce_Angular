import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeServices } from 'src/app/Services/RecipeServices';
import { favServices } from 'src/app/Services/Fav';
import { AccountServices } from './../../../Services/Account';

@Component({
  selector: 'app-home-made-recipe',
  templateUrl: './home-made-recipe.component.html',
  styleUrls: ['./home-made-recipe.component.css']
})
export class HomeMadeRecipeComponent implements OnInit {
  @Input() recipe:Recipe= new Recipe();
  constructor(private rs:RecipeServices,private fav:favServices,private acc:AccountServices) { }

  ngOnInit(): void {
    console.log(this.recipe)
  }
  AddFav(recipeID:number){
    this.fav.AddFav(recipeID,this.acc.getCurrentUserId()).subscribe(res=>console.log(res));
  
  }

}
