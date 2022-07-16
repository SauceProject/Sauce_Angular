import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngerdientListComponent } from './Components/Ingredient/ingerdient-list/ingerdient-list.component';
import { IngerdientCardsComponent } from './Components/Ingredient/ingerdient-cards/ingerdient-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    IngerdientListComponent,
    IngerdientCardsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientMoule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
