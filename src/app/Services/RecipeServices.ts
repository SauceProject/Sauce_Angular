import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResultViewModel } from "../models/ResultViewModel";

@Injectable()
export class RecipeServices {
    constructor(private http:HttpClient){}
    getRecipes(pageSize :number,pageIndex:number){
        return this.http.get<ResultViewModel>(`https://localhost:5001/RecipeAPI/GetAPI?pageSize=${pageSize}&pageIndex=${pageIndex}`)
    }

    getrecipeByID(id:number){
        return this.http.get<ResultViewModel>("https://localhost:5001/RecipeAPI/GetDetails?id="+id);

    }
    
    getRecipesByName(rName:string){
        return this.http.get<ResultViewModel>("https://localhost:5001/RecipeAPI/GetAPI?nameEN="+rName)
    }
    
    getCategories(){
        return this.http.get<ResultViewModel>("https://localhost:5001/CategoryAPI/Get")
    }
    getByCategory(cName:string){
        return this.http.get<ResultViewModel>("https://localhost:5001/RecipeAPI/GetAPI?category="+cName)
    }
    getRating(){
        return this.http.get<ResultViewModel>("https://localhost:5001/RecipeAPI/GetAPI")
    }
    getIng(recipeID:number){
        return this.http.get<ResultViewModel>("https://localhost:5001/RecipeAPI/GetIngredient?recipeID="+recipeID)
    }
}