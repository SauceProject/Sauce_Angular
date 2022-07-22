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
CartItems:addcart[]=[];
 AddTOCart(recipeID:number) {
  console.log(recipeID) 
  this.cart.AddCart(1,recipeID,this.acc.getCurrentUserId()).subscribe(res=>console.log(res));
}
  constructor(private cart:CartServices,
    private acc :AccountServices) {   }

  ngOnInit(): void {
  }

}
