import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderServices } from 'src/app/Services/OrderServices';
import { addcart } from 'src/app/Services/Cart';
import { getLocaleExtraDayPeriods } from '@angular/common';
import { AccountServices } from './../../Services/Account';
import { CartServices } from './../../Services/Cart';
import { Order } from 'src/app/models/Order';
import { OrderItem } from './../../models/OrderItem';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orderItems: OrderItem[] = [];
  TotalPrice: number = 0;
  cartItems: addcart[] = [];
  OrderDetails: Order = new Order();

  constructor(
    private order: OrderServices,
    private acc: AccountServices,
    private cart: CartServices,
    private route:Router
  ) {}

  ngOnInit(): void {
    this.show();
  }
  show() {
    this.order.GetCartByUser(this.acc.getCurrentUserId()).subscribe((res) => {
      //console.log(res.data.data)
      this.orderItems = res.data.data;
      this.GetRecipeNames();
      this.GetTotalPrice();
    });
  }
  GetRecipeNames() {
    this.orderItems.forEach((element) => {
      this.cart.GetRecipeById(element.recipe_ID).subscribe((res) => {
        //console.log(element.recipe_ID)
        //console.log( res.data)
        element.recipe_Name = res.data.nameEN;
      });
    });
    //console.log(this.orderItems);
  }
  price: number = 0;
  GetTotalPrice() {
    this.cart.GetCart().subscribe((res) => {
      this.cartItems = res.data.data;
      this.cartItems.forEach((element) => {
        this.cart.GetRecipeById(element.recipe_ID).subscribe((res) => {
          console.log(res.data.price);
          console.log(element);

          this.TotalPrice = this.TotalPrice + (res.data.price * element.qty);
        });
      });
    });
  }

  OrderNow() {
    var i = 0;
    this.OrderDetails.orderLists = this.orderItems;
    console.log(this.OrderDetails.orderLists);
    this.OrderDetails.userId = this.acc.getCurrentUserId();

    this.order.AddOrder(this.OrderDetails).subscribe((res) => {
      if(res.success){
        this.route.navigateByUrl("/order/sent")
      }
    });
  }
}
