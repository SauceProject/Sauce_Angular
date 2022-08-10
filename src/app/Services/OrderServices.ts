import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { Order } from "../models/Order";
import { ResultViewModel } from "../models/ResultViewModel";

@Injectable()
export class OrderServices{
    Loading:Subject<boolean> = new Subject<boolean>();

    getheader(){
        let token = localStorage.getItem("token")
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
         });
        return { headers: headers };
    }
    constructor(private http:HttpClient){}
    GetCartByUser(userId:string){
        return this.http.get<ResultViewModel>("http://ahmedrafie-001-site1.ftempurl.com/CartAPI/GetByUser?userId="+userId)
    }
    AddOrder(OrderDetails:Order){
        return this.http.post<ResultViewModel>("http://ahmedrafie-001-site1.ftempurl.com/OrderAPI/Add",OrderDetails)
    }
    GetAllOrders(userId:string){
        return this.http.get<ResultViewModel>(environment.apiURl+"OrderAPI/Get?userId="+userId);
    }
    GetAllOrderLists(OrderID:number){
        return this.http.get<ResultViewModel>("http://ahmedrafie-001-site1.ftempurl.com/OrderListAPI/GetByOrderID?OrderID="+OrderID);
    }

}
