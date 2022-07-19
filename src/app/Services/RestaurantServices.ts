import { Injectable } from "@angular/core";
import { Restaurant } from 'src/app/models/Restaurant';
import { HttpClient } from "@angular/common/http";
import { ResultViewModel } from "../models/ResultViewModel";


@Injectable()
export class RestaurantServices
{
    constructor(private Http:HttpClient) { }
    getRestaurant(){
        return this.Http.get<ResultViewModel>("https://localhost:5001/RestaurantAPI/Get")
    }
    getRestByName(rName:string){
        return this.Http.get<ResultViewModel>("https://localhost:5001/RestaurantAPI/Get?nameEN="+rName)
    }
    
}