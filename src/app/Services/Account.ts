import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { EditProfileViewModel } from "../models/EditProfile";
import { LoginViewModel} from "../models/Login";
import { ResultViewModel } from "../models/ResultViewModel";
import { SignUpViewModel } from "../models/SignUp";

@Injectable()
export class AccountServices{
  Logged:Subject<boolean> = new Subject<boolean>();
    constructor(private http:HttpClient){
      this.Logged.next(this.IsLoggedIn());
    }

    getLooggedStatus(){
      return this.Logged.asObservable();
   }
   setLooggedStatus(status:boolean){
       return this.Logged.next(status);
    }
getCurrentUserId():string{
  return localStorage.getItem("userId")??""
}
    login(log:LoginViewModel){
      return this.http.post<ResultViewModel>("http://medorafie-001-site1.btempurl.com/UserAPI/SignIn",log);
    }

    SignUp(log:SignUpViewModel,Role:string){
      let signup=new SignUpViewModel()
      signup.Role=Role;

      return this.http.post<ResultViewModel>("http://medorafie-001-site1.btempurl.com/UserAPI/SignUp",log);
    }

    EditProfile(log:EditProfileViewModel,userid:string){
      let Editprofile=new EditProfileViewModel()
      return this.http.post<ResultViewModel>("http://medorafie-001-site1.btempurl.com/UserAPI/Edit",log);
    }


    LogOut(token:string){
      return this.http.post<ResultViewModel>("http://medorafie-001-site1.btempurl.com/",{token:token});
    }

    IsLoggedIn():boolean{
      let token =localStorage.getItem('token')
      if(token != null){
          return true;
      }
      return false;
  }
  GetUserInfo(ID:string ){
    return this.http.get<ResultViewModel>("http://medorafie-001-site1.btempurl.com/UserAPI/GetById?ID="+ID)}

}
