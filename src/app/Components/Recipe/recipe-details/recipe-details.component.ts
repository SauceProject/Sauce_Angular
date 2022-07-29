import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeServices } from 'src/app/Services/RecipeServices';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipee:Recipe= new Recipe();

  constructor(private active:ActivatedRoute,private recipe:RecipeServices) { }

  ngOnInit(): void {
    console.log(this.active.snapshot.params["id"] )
    this.recipe.getrecipeByID(this.active.snapshot.params["id"]).subscribe(res=>this.recipee=res.data);
  }


}
