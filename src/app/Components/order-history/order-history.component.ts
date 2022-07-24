import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { OrderItem } from 'src/app/models/OrderItem';
import { OrderServices } from 'src/app/Services/OrderServices';
import { CartServices } from 'src/app/Services/Cart';
import { AccountServices } from './../../Services/Account';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  Orders:Order[]=[];
  OrderLists:OrderItem[]=[];
  rNames:string[]=[];
  TotalPrice:number=0;

  constructor(private order:OrderServices,private cart:CartServices,private acc:AccountServices) { }

  ngOnInit(): void {
    this.order.GetAllOrders(this.acc.getCurrentUserId()).subscribe(res=>
      {
        
        //console.log(res.data)
        this.Orders=res.data;
        //console.log(res.data) 
        console.log(res.data)
    })
   
  }

  getNamesArray(){
    this.Orders.forEach(o=>
      {
        this.order.GetAllOrderLists(o.id).subscribe(res=>
        {
          //console.log(res.data)
          this.rNames.push(res.data.recipe_Name)
    
        }          
      )
  });
  //console.log(this.rNames)
  
  }

}
