import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ingerdientviewmodel } from "../models/IngerdientViewModel";
import { ResultViewModel } from "../models/ResultViewModel";




@Injectable()


export class ingerdientServices{
    constructor (private http:HttpClient){}
    getIngerdient(pageSize :number,pageIndex:number ){
        
        return this.http.get<ResultViewModel>(`https://localhost:5001/IngredientAPI/Get?pageSize=${pageSize}&pageIndex=${pageIndex}`);
    }
    getIngByName(rName:string){
        return this.http.get<ResultViewModel>("https://localhost:5001/RecipeAPI/Get?nameEN="+rName)
    }
   
    getIngredient(){
        return this.http.get<ResultViewModel>("https://localhost:5001/IngredientAPI/Get")
    }
    getByIngredient(cName:string){
        return this.http.get<ResultViewModel>("https://localhost:5001/IngredientAPI/Get?Ingredient="+cName)
    }
    
}

