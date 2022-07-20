import { Component, ElementRef, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeServices } from 'src/app/Services/RecipeServices';
import { Category } from './../../../models/Category';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  Recipes:Recipe[]=[];
  unfiltered:Recipe[]=[];
  Categories:Category[]=[];
  recipeName:string="";
  constructor( private RecipeService: RecipeServices) { }

  ngOnInit(): void {
    this.RecipeService.getRecipes().subscribe(res=>
      {
        this.unfiltered=res.data
        this.Recipes=this.unfiltered.filter(i=>i.isDeleted == false)
        
      })
      this.RecipeService.getCategories().subscribe(res=>
        {
          
          this.Categories=res.data.data ;
        })       
  }

  
  getByCategory(cName:string){
    this.Categories.filter(i=>{
      if(i.nameEN==cName)
      {
        i.isChecked=!i.isChecked
      }
    })
    this.Recipes=[];
    this.Categories.forEach(c=>{
      if(c.isChecked==true)
      {
        this.RecipeService.getByCategory(c.nameEN).subscribe(res=>
          {
            console.log(res);
            this.unfiltered=res.data
            this.Recipes.push(...this.unfiltered.filter(i=>i.isDeleted == false && i.nameEN.includes(this.recipeName)))
          })
        
      }
      
    })    
  console.log(this.Categories)
  }
  getName(val:string){
    this.recipeName=val;
  }
  
  
  getRecipesByName(){
    console.log(this.recipeName)
    if(this.recipeName!=="")
        {
        this.RecipeService.getRecipesByName(this.recipeName).subscribe(res=>
          {
            console.log(res);
            this.unfiltered=res.data
            this.Recipes=this.unfiltered.filter(i=>i.isDeleted == false)
          })
        }
  }

 

}
