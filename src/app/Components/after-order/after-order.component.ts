import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServices } from 'src/app/Services/Account';
import { HttpClient } from '@angular/common/http';
import { ResultViewModel } from './../../models/ResultViewModel';
import { environment } from './../../../environments/environment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-after-order',
  templateUrl: './after-order.component.html',
  styleUrls: ['./after-order.component.css']
})
export class AfterOrderComponent implements OnInit {

  constructor(private http:HttpClient,private acc:AccountServices) { }
  orderID:number=0;
  
  ngOnInit(): void {
    //Loading.next(true);
    this.getLastOrder();
  }
  getLastOrder(){
    this.http.get<ResultViewModel>(environment.apiURl+"OrderAPI/GetLastOrder?userId="+this.acc.getCurrentUserId())
    .subscribe(res=>{
      this.orderID=res.data;
      //Loading.next(false);
    })
  }

}
