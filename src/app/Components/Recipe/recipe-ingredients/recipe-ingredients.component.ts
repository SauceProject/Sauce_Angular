import { Component, OnInit } from '@angular/core';
import { RecipeServices } from 'src/app/Services/RecipeServices';
import { ActivatedRoute } from '@angular/router';
import { ingerdientviewmodel } from './../../../models/IngerdientViewModel';

@Component({
  selector: 'app-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.css']
})
export class RecipeIngredientsComponent implements OnInit {
  ingredients:ingerdientviewmodel[]=[]
  constructor(private rs:RecipeServices,private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.rs.getIng(this.active.snapshot.params["id"]).subscribe(res=>{    
      console.log(res);
      this.ingredients=res.data;
    });

  }
  

}
