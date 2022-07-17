import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ingerdientviewmodel } from "../models/IngerdientViewModel";




@Injectable()


export class ingerdientServices{
    constructor (private http:HttpClient){}
      
    addIngerdient(RegisterView: ingerdientviewmodel){
        console.log((RegisterView));
        return this.http.post<ingerdientviewmodel>("https://localhost:4200/ingerdient/Add",RegisterView);
    }
    getIngerdient( ){
        
        return this.http.get<ingerdientviewmodel>("https://localhost:4200/ingerdient/Get");
    }
   
    
}

