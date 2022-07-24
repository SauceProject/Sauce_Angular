import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Rating } from 'src/app/models/Rating';
import { Recipe } from 'src/app/models/Recipe';
import { Restaurant } from 'src/app/models/Restaurant';
import { PagingViewModel } from 'src/app/models/ResultViewModel';
import { RecipeServices } from 'src/app/Services/RecipeServices';
import { RestaurantServices } from 'src/app/Services/RestaurantServices';

@Component({
  selector: 'app-resturant-recipe',
  templateUrl: './resturant-recipe.component.html',
  styleUrls: ['./resturant-recipe.component.css']
})
export class ResturantRecipeComponent implements OnInit {

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
  constructor(private active:ActivatedRoute, private ResturantService: RestaurantServices,private RecipeService:RecipeServices) { }

  ngOnInit(): void {

  
   this.ResturantService.Show(this.active.snapshot.params["id"]).subscribe(res=>console.log(res))
  
  
     console.log(this.active.snapshot.params["id"] )
    // this.ResturantService.getresturantByID(this.active.snapshot.params["id"]).subscribe(res=>console.log(res.data));

    this.fetchData()
  }

  fetchData() {
    console.log(this.tableSize,this.page)
    this.ResturantService.Show(this.active.snapshot.params["id"]).subscribe(res => {
      let responce = res.data as PagingViewModel
      this.page = responce.pageIndex;
      this.tableSize = responce.pageSize;
      this.count = responce.count;
      this.Recipes = responce.data as Recipe[];
      console.log(res);
      console.log(this.Recipes);
    })
  }  
  onTableDataChange(event: any) {
    console.log(event);
    this.page = event;
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
