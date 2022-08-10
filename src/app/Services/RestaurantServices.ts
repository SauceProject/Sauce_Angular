import { Injectable } from "@angular/core";
import { Restaurant } from 'src/app/models/Restaurant';
import { HttpClient } from "@angular/common/http";
import { ResultViewModel } from "../models/ResultViewModel";


@Injectable()
export class RestaurantServices
{
    constructor(private Http:HttpClient) { }
    getRestaurant(pageSize :number,pageIndex:number){
        return this.Http.get<ResultViewModel>(`http://ahmedrafie-001-site1.ftempurl.com/RestaurantAPI/Get?pageSize=${pageSize}&pageIndex=${pageIndex}`)
    }
    getRestByName(rName:string){
        return this.Http.get<ResultViewModel>("http://ahmedrafie-001-site1.ftempurl.com/RestaurantAPI/Get?nameEN="+rName)
    }
    getresturantByID(id:number){
        return this.Http.get<ResultViewModel>("http://ahmedrafie-001-site1.ftempurl.com/RestaurantAPI/Get?id="+id);

    }

    Show(resturantID:number){
        return this.Http.get<ResultViewModel>("http://ahmedrafie-001-site1.ftempurl.com/RecipeAPI/GetAPI?ResturantID="+resturantID)
    }

}
