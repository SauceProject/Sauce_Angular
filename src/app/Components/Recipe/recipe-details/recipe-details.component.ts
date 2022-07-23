import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeServices } from 'src/app/Services/RecipeServices';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private active:ActivatedRoute,private recipe:RecipeServices) { }

  ngOnInit(): void {
    console.log(this.active.snapshot.params["id"] )
    this.recipe.getrecipeByID(this.active.snapshot.params["id"]).subscribe(res=>console.log(res));
  }
    

}
