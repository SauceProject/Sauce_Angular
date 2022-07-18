import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { LoginViewModel} from "../models/Login";
import { ResultViewModel } from "../models/ResultViewModel";
import { SignUpViewModel } from "../models/SignUp";

@Injectable()
export class AccountServices{
    constructor(private http:HttpClient){}

    login(log:LoginViewModel){
      return this.http.post<ResultViewModel>(environment.apiURl+'UserAPI/SignIn',log);
    }

    SignUp(log:SignUpViewModel){
      return this.http.post<ResultViewModel>(environment.apiURl+'UserAPI/SignUp',log);
    }

    LogOut(token:string){
      return this.http.post<ResultViewModel>(environment.apiURl,{token:token});
    }

}
