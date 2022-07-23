import { Component, OnInit } from '@angular/core';
import { addcart, CartServices } from 'src/app/Services/Cart';
import { RecipeServices } from 'src/app/Services/RecipeServices';
import { AccountServices } from 'src/app/Services/Account';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  CartItem: addcart[] = [];
  constructor(
    private cart: CartServices,
    private recipeService: RecipeServices,
    private acc: AccountServices
  ) {}
  ngOnInit(): void {
    this.show();
  }
  show() {
    this.cart.GetCart().subscribe((res) => {
      this.CartItem = res.data.data;
      this.GetRecipeNames();
      this.GetRecipePrices();
    });
  }
  GetRecipeNames() {
    this.CartItem.forEach((element) => {
      this.cart
        .GetRecipeById(element.recipe_ID)
        .subscribe((res) => (element.recipe_Name = res.data[0].nameEN));
    });
    //console.log(this.CartItem);
  }
  GetRecipePrices() {
    this.CartItem.forEach((element) => {
      this.cart.GetRecipeById(element.recipe_ID).subscribe((res) => {
        //console.log(res.data[0])
        element.price = res.data[0].price * element.qty;
      });
    });
    //console.log(this.CartItem);
  }
  minus(recipeID: number) {
    //console.log(recipeID);
    var index = this.CartItem.findIndex((i) => i.recipe_ID == recipeID);
    this.CartItem[index].qty--;
    this.cart.UpdateCart(this.CartItem[index].qty,recipeID,this.acc.getCurrentUserId()).subscribe()
    this.GetRecipePrices();
  }
  plus(recipeID: number) {
    //console.log(recipeID);
    var index = this.CartItem.findIndex((i) => i.recipe_ID == recipeID);
    this.CartItem[index].qty++;
    this.cart.UpdateCart(this.CartItem[index].qty,recipeID,this.acc.getCurrentUserId()).subscribe()
    this.GetRecipePrices();

  }
  remove(CartID: number) {
    this.cart.RempveCart(CartID).subscribe((res) => this.show());
  }
  

  // this.CartItem.forEach(element=>{
  //   this.recipeService.getRecipes().subscribe(res=>
  //     )
  // })
}