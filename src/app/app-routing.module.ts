import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Components/Account/log-in/log-in.component';
import { LogOutComponent } from './Components/Account/log-out/log-out.component';
import { SignUpComponent } from './Components/Account/sign-up/sign-up.component';

const routes: Routes = [
  {path:"UserAPI/SignIn",component:LogInComponent},
  {path:"UserAPI/SignUp",component:SignUpComponent},
  {path:"LogOut",component:LogOutComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
