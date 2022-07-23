import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ingerdientviewmodel } from "../models/IngerdientViewModel";
import { ResultViewModel } from "../models/ResultViewModel";




@Injectable()


export class CartServices{
    constructor (private http:HttpClient){}
    getheader(){
        let token = localStorage.getItem("token")
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
         });
        return { headers: headers }; 
    }

    GetAllCart( ){
         
        return this.http.get<ResultViewModel>("https://localhost:5001/RecipeAPI/GetAPI",this.getheader());
    }

    GetCart(){  
        return this.http.get<ResultViewModel>("https://localhost:5001/CartAPI/Get",this.getheader());
    }
    GetRecipeById(RecipeID:number){
        return this.http.get<ResultViewModel>("https://localhost:5001/RecipeAPI/GetAPI?ID="+RecipeID,this.getheader());
    }
    AddCart(Qty:number,Recipe_ID:number,userId:string){  
        let cart = new addcart()
        cart.qty=Qty;
        cart.recipe_ID = Recipe_ID;
        cart.UserId = userId
        return this.http.post<ResultViewModel>("https://localhost:5001/CartAPI/Add",cart,this.getheader());
    }
    UpdateCart(Qty:number,Recipe_ID:number,userId:string){  
        let cart = new addcart()
        cart.qty=Qty;
        cart.recipe_ID = Recipe_ID;
        cart.UserId = userId
        return this.http.post<ResultViewModel>("https://localhost:5001/CartAPI/Update",cart,this.getheader());
    }

    RempveCart(CartID:number){  
        return this.http.post<ResultViewModel>("https://localhost:5001/CartAPI/Remove",{ID:CartID},this.getheader());
    }
    
}
export class addcart{
    id=0;
    recipe_ID = 0;
    qty= 1;
    UserId="";
    price=0;
    recipe_Name=""

}