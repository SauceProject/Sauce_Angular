import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResultViewModel } from "../models/ResultViewModel";

@Injectable()
export class RecipeServices {
    constructor(private http:HttpClient){}
    getRecipes(){
        return this.http.get<ResultViewModel>("https://localhost:5001/RecipeAPI/Get")
    }
    getRecipesByName(rName:string){
        return this.http.get<ResultViewModel>("https://localhost:5001/RecipeAPI/Get?nameEN="+rName)
    }
    getCategories(){
        return this.http.get<ResultViewModel>("https://localhost:5001/CategoryAPI/Get")
    }
    getByCategory(cName:string){
        return this.http.get<ResultViewModel>("https://localhost:5001/RecipeAPI/Get?category="+cName)
    }
}