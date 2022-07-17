import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ingerdientviewmodel } from "../models/IngerdientViewModel";
import { ResultViewModel } from "../models/ResultViewModel";




@Injectable()


export class ingerdientServices{
    constructor (private http:HttpClient){}
    getIngerdient( ){
        
        return this.http.get<ResultViewModel>("https://localhost:5001/IngredientAPI/Get");
    }
   
    
}

