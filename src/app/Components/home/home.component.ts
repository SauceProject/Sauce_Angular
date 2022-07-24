import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { AccountServices } from 'src/app/Services/Account';
import { addcart, CartServices } from 'src/app/Services/Cart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  constructor(private cart:CartServices,
    private acc :AccountServices) { }

  ngOnInit(): void {
  }

}
