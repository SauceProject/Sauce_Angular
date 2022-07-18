import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Components/Account/log-in/log-in.component';
import { LogOutComponent } from './Components/Account/log-out/log-out.component';
import { SignUpComponent } from './Components/Account/sign-up/sign-up.component';
import { IngerdientCardsComponent } from './Components/Ingredient/ingerdient-cards/ingerdient-cards.component';
import { IngerdientListComponent } from './Components/Ingredient/ingerdient-list/ingerdient-list.component';
import { RecipeCardComponent } from './Components/Recipe/recipe-card/recipe-card.component';
import { RecipeListComponent } from './Components/Recipe/recipe-list/recipe-list.component';
import { RestaurantComponent } from './Components/restaurant/restaurant.component';
import { RestaurantListComponent } from './Components/restaurant-list/restaurant-list.component';

const routes: Routes = [
  {path:"UserAPI/SignIn",component:LogInComponent},
  {path:"UserAPI/SignUp",component:SignUpComponent},
  {path:"LogOut",component:LogOutComponent},
  {path:"restaurant",component:RestaurantComponent},
  {path:"recipe-Card",component:RecipeCardComponent},
  {path:"recipe-List",component:RecipeListComponent},
  {path:"ingerdient-Card",component:IngerdientCardsComponent},
  {path:"ingerdient-List",component:IngerdientListComponent},
  {path:"Restaurant-List",component:RestaurantListComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
