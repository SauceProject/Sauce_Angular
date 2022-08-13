import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ResultViewModel } from "../models/ResultViewModel";

@Injectable()
export class RecipeServices {
    constructor(private http:HttpClient){}
    getRecipes(pageSize :number,pageIndex:number){
        return this.http.get<ResultViewModel>(`http://medorafie-001-site1.btempurl.com/RecipeAPI/GetAPI?pageSize=${pageSize}&pageIndex=${pageIndex}`);
    }

    getrecipeByID(id:number){
        return this.http.get<ResultViewModel>("http://medorafie-001-site1.btempurl.com/RecipeAPI/GetDetails?id="+id);

    }

    getRecipesByName(rName:string){
        return this.http.get<ResultViewModel>("http://medorafie-001-site1.btempurl.com/RecipeAPI/GetAPI?nameEN="+rName);
    }

    getCategories(){
        return this.http.get<ResultViewModel>("http://medorafie-001-site1.btempurl.com/CategoryAPI/Get");
    }
    getByCategory(cName:string){
        return this.http.get<ResultViewModel>("http://medorafie-001-site1.btempurl.com/GetAPI?category="+cName)
    }
    getIngredient(){
        return this.http.get<ResultViewModel>("http://medorafie-001-site1.btempurl.com/IngredientAPI/Get");
    }
    getByIngredient(IngerdientId:number){
        return this.http.get<ResultViewModel>("http://medorafie-001-site1.btempurl.com/RecipeAPI/GetByIngerdientAPI?IngerdientId="+IngerdientId);
    }

    getRating(){
        return this.http.get<ResultViewModel>("http://medorafie-001-site1.btempurl.com/RecipeAPI/GetAPI");
    }
    getIng(recipeID:number){
        return this.http.get<ResultViewModel>("http://medorafie-001-site1.btempurl.com/RecipeAPI/GetIngredient?recipeID="+recipeID);
    }
}
