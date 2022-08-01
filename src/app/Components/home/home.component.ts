import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { Rating } from 'src/app/models/Rating';
import { Recipe } from 'src/app/models/Recipe';
import { Restaurant } from 'src/app/models/Restaurant';
import { PagingViewModel } from 'src/app/models/ResultViewModel';
import { AccountServices } from 'src/app/Services/Account';
import { addcart, CartServices } from 'src/app/Services/Cart';
import { RecipeServices } from 'src/app/Services/RecipeServices';
import { RestaurantServices } from 'src/app/Services/RestaurantServices';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page: number = 1; //current page number
  count: number = 1; //total pages

  //number of elements to get form database per request
  tableSize: number = 6;
  tableSizes: any = [1, 5, 10, 20];
  Recipes:Recipe[]=[];
  unfiltered:Recipe[]=[];
  Rating:Rating[]=[];
  Categories:Category[]=[];
  recipeName:string="";
  restaurant:Restaurant[]=[];
  restName:string="";
  @Input() recipe:Recipe= new Recipe();
CartItems:addcart[]=[];
 @Input() rateval:number=0;
 //isInCart:boolean=false;
 btnDis:string="btnDis";
 btn:string="btn";
  hidden:string="hidden";
 AddTOCart(recipeID:number) {
  
    this.cart.AddCart(1,recipeID,this.acc.getCurrentUserId()).subscribe(res=>this.recipe.isInCart=res.data);
  
}
  constructor(private cart:CartServices, private acc :AccountServices,
    private RecipeService: RecipeServices,private RestaurantServices:RestaurantServices) { }

  ngOnInit(): void {
    this.fetchData()
    this.RestaurantServices.getRestaurant(this.tableSize,this.page).subscribe(res =>
      {
        // console.log(res);
        this.restaurant=res.data.data
      })
  }
  fetchData() {
    console.log(this.tableSize,this.page)
    this.RecipeService.getRecipes(this.tableSize,this.page).subscribe(res => {
      let responce = res.data as PagingViewModel
      this.page = responce.pageIndex;
      this.tableSize = responce.pageSize;
      this.count = responce.count;
      this.Recipes = responce.data as Recipe[];
      // this.Recipes=this.Recipes.filter(i=> i.resturantID!=null)
      // console.log(res);
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
 
// resturant

getNameres(valu:string){
  this.restName=valu;
}


getRestByName(){
  //console.log(this.restName)
  if(this.restName!=="")
      {
      this.RestaurantServices.getRestByName(this.restName) .subscribe(res=>
        {
          console.log(res);
          this.restaurant=res.data
        })
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
