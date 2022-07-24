import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ingerdientviewmodel } from "../models/IngerdientViewModel";
import { ResultViewModel } from "../models/ResultViewModel";


@Injectable()


export class favServices{
    constructor (private http:HttpClient){}
    getheader(){
        let token = localStorage.getItem("token")
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
         });
        return { headers: headers };
    }

    GetAllFav( ){

        return this.http.get<ResultViewModel>("https://localhost:5001/RecipeAPI/GetAPI",this.getheader());
    }

    GetFav(){
        return this.http.get<ResultViewModel>("https://localhost:5001/FavAPI/Get",this.getheader());
    }
    GetRecipeById(RecipeID:number){
        return this.http.get<ResultViewModel>("https://localhost:5001/RecipeAPI/GetAPI?ID="+RecipeID,this.getheader());
    }
    AddFav(Qty:number,Recipe_ID:number,userId:string){
        let fav = new addfav()
        fav.qty=Qty;
        fav.recipe_ID = Recipe_ID;
        fav.UserId = userId
        return this.http.post<ResultViewModel>("https://localhost:5001/FavAPI/Add",fav,this.getheader());
    }


    RempveFav(FavID:number){
        return this.http.post<ResultViewModel>("https://localhost:5001/FavAPI/Remove",{ID:FavID},this.getheader());
    }

}

export class addfav{
  id=0;
  recipe_ID = 0;
  qty= 1;
  UserId="";
  price=0;
  recipe_Name=""

}