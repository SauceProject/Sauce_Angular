import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ingerdientviewmodel } from "../models/IngerdientViewModel";
import { ResultViewModel } from "../models/ResultViewModel";




@Injectable()


export class ingerdientServices{
    constructor (private http:HttpClient){}
    getIngerdient(pageSize :number,pageIndex:number ){

        return this.http.get<ResultViewModel>(`http://medorafie-001-site1.btempurl.com/IngredientAPI/Get?pageSize=${pageSize}&pageIndex=${pageIndex}`);
    }
    getIngByName(rName:string){
        return this.http.get<ResultViewModel>("http://medorafie-001-site1.btempurl.com/RecipeAPI/Get?nameEN="+rName);
    }

    getIngredient(){
        return this.http.get<ResultViewModel>("http://medorafie-001-site1.btempurl.com/IngredientAPI/Get");
    }
    getByIngredient(cName:string){
        return this.http.get<ResultViewModel>("http://medorafie-001-site1.btempurl.com/IngredientAPI/Get?Ingredient="+cName);
    }

}

