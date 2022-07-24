import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Order } from "../models/Order";
import { ResultViewModel } from "../models/ResultViewModel";

@Injectable()
export class OrderServices{
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
        return this.http.get<ResultViewModel>("https://localhost:5001/CartAPI/GetByUser?userId="+userId)
    }
    AddOrder(OrderDetails:Order){
        return this.http.post<ResultViewModel>("https://localhost:5001/OrderAPI/Add",OrderDetails)


    }

}