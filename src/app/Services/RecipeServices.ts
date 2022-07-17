import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResultViewModel } from "../models/ResultViewModel";

@Injectable()
export class RecipeServices {
    constructor(private http:HttpClient){}
    getRecipes(){
        return this.http.get<ResultViewModel>("https://localhost:5001/RecipeAPI/Get")
    }
}