// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { EmailComponent } from './email/email.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule // Aggiungi FormsModule agli imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
