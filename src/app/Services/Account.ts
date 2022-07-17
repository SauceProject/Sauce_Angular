import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { LoginViewModel, SignUpViewModel } from "../models/Login";
import { ResultViewModel } from "../models/ResultViewModel";
import { SignUp, StudentCreateViewModel, StudentEditViewModel } from "../models/SignUp";

@Injectable()
export class AccountServices{
    constructor(private http:HttpClient){}

    login(log:LoginViewModel){
      return this.http.post<ResultViewModel>(environment.apiURl+'user/login',log);
    }

    SignUp(log:SignUpViewModel){
      return this.http.post<ResultViewModel>(environment.apiURl+'user/Post',log);
    }

    LogOut(token:string){
      return this.http.post<ResultViewModel>(environment.apiURl,{token:token});
    }

}
