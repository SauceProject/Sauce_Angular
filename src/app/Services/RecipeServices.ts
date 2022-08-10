import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResultViewModel } from "../models/ResultViewModel";

@Injectable()
export class RecipeServices {
    constructor(private http:HttpClient){}
    getRecipes(pageSize :number,pageIndex:number){
        return this.http.get<ResultViewModel>(`http://ahmedrafie-001-site1.ftempurl.com/RecipeAPI/GetAPI?pageSize=${pageSize}&pageIndex=${pageIndex}`)
    }

    getrecipeByID(id:number){
        return this.http.get<ResultViewModel>("http://ahmedrafie-001-site1.ftempurl.com/RecipeAPI/GetDetails?id="+id);

    }

    getRecipesByName(rName:string){
        return this.http.get<ResultViewModel>("http://ahmedrafie-001-site1.ftempurl.com/RecipeAPI/GetAPI?nameEN="+rName)
    }

    getCategories(){
        return this.http.get<ResultViewModel>("http://ahmedrafie-001-site1.ftempurl.com/CategoryAPI/Get")
    }
    getByCategory(cName:string){
        return this.http.get<ResultViewModel>("http://ahmedrafie-001-site1.ftempurl.com/RecipeAPI/GetAPI?category="+cName)
    }
    getIngredient(){
        return this.http.get<ResultViewModel>("http://ahmedrafie-001-site1.ftempurl.com/IngredientAPI/Get")
    }
    getByIngredient(IngerdientId:number){
        return this.http.get<ResultViewModel>("http://ahmedrafie-001-site1.ftempurl.com/RecipeAPI/GetByIngerdientAPI?IngerdientId="+IngerdientId)
    }

    getRating(){
        return this.http.get<ResultViewModel>("http://ahmedrafie-001-site1.ftempurl.com/RecipeAPI/GetAPI")
    }
    getIng(recipeID:number){
        return this.http.get<ResultViewModel>("http://ahmedrafie-001-site1.ftempurl.com/RecipeAPI/GetIngredient?recipeID="+recipeID)
    }
}
