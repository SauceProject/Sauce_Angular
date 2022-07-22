import { Component, ElementRef, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import { Rating } from 'src/app/models/Rating';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeServices } from 'src/app/Services/RecipeServices';
import { RatingComponent } from '../../rating/rating.component';
import { Category } from './../../../models/Category';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  page: number = 1; //current page number
  count: number = 1; //total pages

  //number of elements to get form database per request
  tableSize: number = 5;
  tableSizes: any = [1, 5, 10, 20];
  Recipes:Recipe[]=[];
  unfiltered:Recipe[]=[];
  Rating:Rating[]=[];
  Categories:Category[]=[];
  recipeName:string="";
  constructor( private RecipeService: RecipeServices) { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    console.log(this.tableSize,this.page)
    this.RecipeService.getRecipes(this.tableSize,this.page).subscribe(res => {
      console.log(res);
      this.page = res.data.pageIndex;
      this.tableSize = res.data.pageSize;
      this.count = res.data.count;
      this.Recipes = res.data;
    })
  }  
  onTableDataChange(event: any) {
    console.log(event);
    this.page = event;
    this.tableSize = 3;
    this.fetchData();
    
      // this.RecipeService.getCategories().subscribe(res=>
      //   {
          
      //     this.Categories=res.data ;
      //   })     
      
        
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
