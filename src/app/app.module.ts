import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngerdientListComponent } from './Components/Ingredient/ingerdient-list/ingerdient-list.component';
import { IngerdientCardsComponent } from './Components/Ingredient/ingerdient-cards/ingerdient-cards.component';
import { FormBuilder, FormsModule } from '@angular/forms';
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
import { RestaurantServices } from './Services/RestaurantServices';
import { NavbarComponent } from './Components/Nav/navbar/navbar.component';
import { RatingComponent } from './Components/rating/rating.component';
import { CartComponent } from './Components/cart/cart.component';
import { OurTeamComponent } from './Components/our-team/our-team.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CartServices } from './Services/Cart';
import { OrderComponent } from './Components/order/order.component';
import { RecipeDetailsComponent } from './Components/Recipe/recipe-details/recipe-details.component';
import { OrderServices } from 'src/app/Services/OrderServices';
import { SignAsComponent } from './Components/Account/sign-as/sign-as.component';
import { ResturantRecipeComponent } from './Components/restaurant/resturant-recipe/resturant-recipe.component';
import { NgbRatingComponent } from './Components/ngb-rating/ngb-rating.component';
import { HomeComponent } from './Components/home/home.component';
import { HomeMadeRecipeComponent } from './Components/Recipe/home-made-recipe/home-made-recipe.component';
import { FavoriteComponent } from './Components/favorite/favorite.component';
import { ProfileComponent } from './Components/Account/profile/profile.component';
import { AfterOrderComponent } from './Components/after-order/after-order.component';
import { RatingServices } from './Services/Rating';
import { favServices } from './Services/Fav';
import { RecipeIngredientsComponent } from './Components/Recipe/recipe-ingredients/recipe-ingredients.component';


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
    NavbarComponent,
    RatingComponent,
    CartComponent,
    OurTeamComponent,
    FooterComponent,
    OrderComponent,
    RecipeDetailsComponent,
    SignAsComponent,
    ResturantRecipeComponent,
    NgbRatingComponent,
    HomeComponent,
    HomeMadeRecipeComponent,
    FavoriteComponent,
    ProfileComponent,
    AfterOrderComponent,
    RecipeIngredientsComponent,

  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [
    ingerdientServices,
    AccountServices,
    RecipeServices,
    RestaurantServices,
    CartServices,
    OrderServices,
    RatingServices,
    favServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
