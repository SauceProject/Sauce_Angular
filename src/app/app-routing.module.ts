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
import { CartComponent } from './Components/cart/cart.component';
import { OurTeamComponent } from './Components/our-team/our-team.component';
import { OrderComponent } from './Components/order/order.component';
import { RecipeDetailsComponent } from './Components/Recipe/recipe-details/recipe-details.component';
import { SignAsComponent } from './Components/Account/sign-as/sign-as.component';
import { ResturantRecipeComponent } from './Components/restaurant/resturant-recipe/resturant-recipe.component';
import { HomeComponent } from './Components/home/home.component';
import { FavoriteComponent } from './Components/favorite/favorite.component';
import { ProfileComponent } from './Components/Account/profile/profile.component';
import { AfterOrderComponent } from './Components/after-order/after-order.component';
import { RecipeIngredientsComponent } from './Components/Recipe/recipe-ingredients/recipe-ingredients.component';
import { AuthGuard } from './Gaurds/auth.guard';


const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:"UserAPI/SignIn",component:LogInComponent},
  {path:"UserAPI/SignUp",component:SignUpComponent},
  {path:"LogOut",component:LogOutComponent},
  {path:"restaurant",component:RestaurantComponent},
  {path:"recipe-Card",component:RecipeCardComponent},
  {path:"Recipes",component:RecipeListComponent},
  {path:"ingerdient-Card",component:IngerdientCardsComponent},
  {path:"Ingredients",component:IngerdientListComponent},
  {path:"Restaurants",component:RestaurantListComponent},
  {path:"Cart",component:CartComponent},
  {path:"OurTeam",component:OurTeamComponent},
  {path:"Order",component:OrderComponent,canActivate:[AuthGuard]},
  {path:"recipe/details/:id",component:RecipeDetailsComponent},
  {path:"SignUpAs",component:SignAsComponent},
  {path:"Restaurants/details/:id",component:ResturantRecipeComponent},
  {path:"Home",component:HomeComponent},
  {path:"",component:HomeComponent},
  {path:"favorite",component:FavoriteComponent},
  {path:"recipe/Ingredients/:id",component:RecipeIngredientsComponent},
  {path:"Profile",component:ProfileComponent},
  {path:"order/sent",component:AfterOrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
