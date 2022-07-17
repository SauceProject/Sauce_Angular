import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngerdientListComponent } from './Components/Ingredient/ingerdient-list/ingerdient-list.component';
import { IngerdientCardsComponent } from './Components/Ingredient/ingerdient-cards/ingerdient-cards.component';
import { FormBuilder } from '@angular/forms';
import { ingerdientServices } from './Services/ingerdientservices';
import { SignUpComponent } from './Components/Account/sign-up/sign-up.component';
import { LogInComponent } from './Components/Account/log-in/log-in.component';
import { LogOutComponent } from './Components/Account/log-out/log-out.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AccountServices } from './Services/Account';
import { RestaurantComponent } from './Components/restaurant/restaurant.component';
import { RestaurantListComponent } from './Components/restaurant-list/restaurant-list.component';
import { RecipeCardComponent } from './Components/Recipe/recipe-card/recipe-card.component';
import { RecipeListComponent } from './Components/Recipe/recipe-list/recipe-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeServices } from './Services/RecipeServices';

@NgModule({
  declarations: [
    AppComponent,
    IngerdientListComponent,
    IngerdientCardsComponent,
    SignUpComponent,
    LogInComponent,
    LogOutComponent,

    RestaurantComponent,
    RestaurantListComponent,
    RecipeCardComponent,
    RecipeListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ingerdientServices,
    AccountServices,
    RecipeServices,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
