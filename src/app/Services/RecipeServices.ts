import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResultViewModel } from "../models/ResultViewModel";

@Injectable()
export class RecipeServices {
    constructor(private http:HttpClient){}
    getRecipes(pageSize :number,pageIndex:number){
        return this.http.get<ResultViewModel>(`https://localhost:5001/RecipeAPI/GetAPI?pageSize=${pageSize}&pageIndex=${pageIndex}`)
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
    getRating(){
        return this.http.get<ResultViewModel>("https://localhost:5001/RecipeAPI/GetAPI")
    }
}