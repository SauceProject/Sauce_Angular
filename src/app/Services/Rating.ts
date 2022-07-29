import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Rating } from "../models/Rating";
import { ResultViewModel } from "../models/ResultViewModel";

@Injectable()


export class RatingServices{
    constructor (private http:HttpClient){}
    getheader(){
        let token = localStorage.getItem("token")
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
         });
        return { headers: headers };
    }


    AddRate(value:number,Recipe_ID:number,userId:string){
      let rate = new Rating()
      rate.RatingValue=value;
      rate.RecipeID = Recipe_ID;
      rate.UserID = userId
      return this.http.post<ResultViewModel>("https://localhost:5001/RatingAPI/Add",rate,this.getheader());

    }


  }
