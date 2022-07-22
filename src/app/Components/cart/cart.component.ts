import { Component, OnInit } from '@angular/core';
import { addcart, CartServices } from 'src/app/Services/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  CartItem:addcart[]=[];
  constructor(private cart:CartServices) { }
  ngOnInit(): void {
    this.cart.GetCart().subscribe(res=>this.CartItem=res.data.data);
  }

}
