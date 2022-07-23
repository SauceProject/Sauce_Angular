import { Component, Input, OnInit } from '@angular/core';
import { AccountServices } from 'src/app/Services/Account';
import { addcart, CartServices } from 'src/app/Services/Cart';
import { RecipeServices } from 'src/app/Services/RecipeServices';
import { Recipe } from './../../../models/Recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe:Recipe= new Recipe();
 @Input() rateval:number=0;
 //isInCart:boolean=false;
 btnDis:string="btnDis";
 btn:string="btn";

  hidden:string="hidden";
 AddTOCart(recipeID:number) {
  
    this.cart.AddCart(1,recipeID,this.acc.getCurrentUserId()).subscribe(res=>this.recipe.isInCart=res.data);
  
}

  constructor(private cart:CartServices,
    private acc :AccountServices) {   }

  ngOnInit(): void {
  }

}
