import { Injectable } from "@angular/core";
import { ResConfig } from 'src/app/models/Restaurant/ResConfig';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RestaurantServices
{
    constructor(private Http:HttpClient) { }
    getRestaurant(){
        return this.Http.get<ResConfig>("https://localhost:5001/RestaurantAPI/Get")
    }
}