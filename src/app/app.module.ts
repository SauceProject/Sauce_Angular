import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngerdientListComponent } from './Components/Ingredient/ingerdient-list/ingerdient-list.component';
import { IngerdientCardsComponent } from './Components/Ingredient/ingerdient-cards/ingerdient-cards.component';
import { FormBuilder } from '@angular/forms';
import { ingerdientServices } from './Services/ingerdientservices';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    IngerdientListComponent,
    IngerdientCardsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormBuilder,
    HttpClient,

  ],
  providers: [
    ingerdientServices,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
