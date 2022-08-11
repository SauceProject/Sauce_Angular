import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ResultViewModel } from "../models/ResultViewModel";

@Injectable()
export class RecipeServices {
    constructor(private http:HttpClient){}
    getRecipes(pageSize :number,pageIndex:number){
        return this.http.get<ResultViewModel>(environment.apiURl+`RecipeAPI/GetAPI?pageSize=${pageSize}&pageIndex=${pageIndex}`);
    }

    getrecipeByID(id:number){
        return this.http.get<ResultViewModel>(environment.apiURl+'RecipeAPI/GetDetails?id='+id);

    }

    getRecipesByName(rName:string){
        return this.http.get<ResultViewModel>(environment.apiURl+'RecipeAPI/GetAPI?nameEN='+rName);
    }

    getCategories(){
        return this.http.get<ResultViewModel>(environment.apiURl+'CategoryAPI/Get');
    }
    getByCategory(cName:string){
        return this.http.get<ResultViewModel>(environment.apiURl+'GetAPI?category='+cName)
    }
    getIngredient(){
        return this.http.get<ResultViewModel>(environment.apiURl+'IngredientAPI/Get');
    }
    getByIngredient(IngerdientId:number){
        return this.http.get<ResultViewModel>(environment.apiURl+'RecipeAPI/GetByIngerdientAPI?IngerdientId='+IngerdientId);
    }

    getRating(){
        return this.http.get<ResultViewModel>(environment.apiURl+'RecipeAPI/GetAPI');
    }
    getIng(recipeID:number){
        return this.http.get<ResultViewModel>(environment.apiURl+'RecipeAPI/GetIngredient?recipeID='+recipeID);
    }
}
