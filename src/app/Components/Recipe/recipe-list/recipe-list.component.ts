import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeServices } from 'src/app/Services/RecipeServices';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  Recipes:Recipe[]=[]
  constructor( private RecipeService: RecipeServices) { }

  ngOnInit(): void {
    this.RecipeService.getRecipes().subscribe(res=>
      {
        console.log(res);
        this.Recipes=res.data
      })

  }

}
