import { Component, ElementRef, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import { ingerdientviewmodel } from 'src/app/models/IngerdientViewModel';
import { Rating } from 'src/app/models/Rating';
import { Recipe } from 'src/app/models/Recipe';
import { PagingViewModel } from 'src/app/models/ResultViewModel';
import { ingerdientServices } from 'src/app/Services/ingerdientservices';
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
  tableSize: number = 10;
  tableSizes: any = [1, 5, 10, 20];
  Recipes:Recipe[]=[];
  unfiltered:Recipe[]=[];
  Rating:Rating[]=[];
  Categories:Category[]=[];
  Ingredients: ingerdientviewmodel[]=[];
  recipeName:string="";
  constructor( private RecipeService: RecipeServices, private ingerdientServices : ingerdientServices) { }


  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    //console.log(this.tableSize,this.page)
    this.RecipeService.getRecipes(this.tableSize,this.page).subscribe(res => {
      let responce = res.data as PagingViewModel
      this.page = responce.pageIndex;
      this.tableSize = responce.pageSize;
      this.count = responce.count;
      this.unfiltered = responce.data as Recipe[];
      this.Recipes=this.unfiltered.filter(i=> i.resturantID==null) as Recipe[]
      this.getRecipesByName();
      this.RecipeService.getCategories().subscribe(res=>
        {
          this.Categories=res.data ;
          var c = new Category();
          c.nameEN="All";
          this.Categories.push(c);
        })   
        this.RecipeService.getIngredient().subscribe(res=>
          {
            //console.log(res.data)
            // this.Categories=res.data ;
            this.Ingredients=res.data.data;
            var ing = new ingerdientviewmodel();
            ing.nameEN="All";
            this.Ingredients.push(ing);
          }) 
    })
  }  
 onTableDataChange(event: any) {
   // console.log(event);
    this.page = event;
    this.fetchData();
    
      
      
        
  }
 
 
  getName(val:string){
    this.recipeName=val;
  }
  
  getRecipesByName(){
    //console.log(this.recipeName)
    if(this.recipeName!=="")
        {
        this.RecipeService.getRecipesByName(this.recipeName).subscribe(res=>
          {
            //console.log(res);
            this.unfiltered=res.data.data
            
            this.Recipes=this.unfiltered.filter(i=>i.isDeleted == false)
          })
        }
        else{
          this.RecipeService.getRecipes(this.tableSize,this.page).subscribe(res => {
            let responce = res.data as PagingViewModel
            this.page = responce.pageIndex;
            this.tableSize = responce.pageSize;
            this.count = responce.count;
            this.Recipes = responce.data as Recipe[];})

        }
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
      if(c.isChecked==true )
      {
        if(c.nameEN=="All"){
          this.RecipeService.getRecipes(this.tableSize,this.page).subscribe(res => {
            let responce = res.data as PagingViewModel
            this.page = responce.pageIndex;
            this.tableSize = responce.pageSize;
            this.count = responce.count;
            this.Recipes = responce.data as Recipe[];
            this.Recipes= this.Recipes.filter(i=>  i.nameEN.includes(this.recipeName))
          })
        }
        else {
        this.RecipeService.getByCategory(c.nameEN).subscribe(res=>
          {
            //console.log(res);
            this.unfiltered=res.data.data
            this.Recipes.push(...this.unfiltered.filter(i=>  i.nameEN.includes(this.recipeName)))
          })
        }
        
      }     
    })  
    
  
  }
  getByIngredient(IngerdientId:number){
 
    this.Ingredients.filter(i=>{
      if(i.id==IngerdientId)
      {
        i.isChecked=!i.isChecked
      }
    })
    this.Recipes=[];
    this.Ingredients.forEach(ing=>{
      if(ing.isChecked==true )
      {
        if(ing.nameEN=="All"){
          this.RecipeService.getRecipes(this.tableSize,this.page).subscribe(res => {
            let responce = res.data as PagingViewModel
            this.page = responce.pageIndex;
            this.tableSize = responce.pageSize;
            this.count = responce.count;
            this.Recipes = responce.data as Recipe[];})
        }
        else {
        this.RecipeService.getByIngredient(ing.id).subscribe(res=>
          {
            this.unfiltered=res.data
            this.Recipes.push(...this.unfiltered.filter(i=>  i.nameEN.includes(this.recipeName)))
            this.Recipes= this.Recipes.filter(
              (recipe, i, arr) => arr.findIndex(t => t.id === recipe.id) === i
            );
          })
        }
        
      }     
    })  
}

}
