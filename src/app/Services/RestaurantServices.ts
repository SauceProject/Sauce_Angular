import { Injectable } from "@angular/core";
import { Restaurant } from 'src/app/models/Restaurant';
import { HttpClient } from "@angular/common/http";
import { ResultViewModel } from "../models/ResultViewModel";
import { environment } from "src/environments/environment";


@Injectable()
export class RestaurantServices
{
    constructor(private Http:HttpClient) { }
    getRestaurant(pageSize :number,pageIndex:number){
        return this.Http.get<ResultViewModel>(`http://medorafie-001-site1.btempurl.com/RestaurantAPI/Get?pageSize=${pageSize}&pageIndex=${pageIndex}`);
    }
    getRestByName(rName:string){
        return this.Http.get<ResultViewModel>("http://medorafie-001-site1.btempurl.com/RestaurantAPI/Get?nameEN="+rName);
    }
    getresturantByID(id:number){
        return this.Http.get<ResultViewModel>("http://medorafie-001-site1.btempurl.com/RestaurantAPI/Get?id="+id);

    }

    Show(resturantID:number){
        return this.Http.get<ResultViewModel>("http://medorafie-001-site1.btempurl.com/RecipeAPI/GetAPI?ResturantID="+resturantID);
    }

}
