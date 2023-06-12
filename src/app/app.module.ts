import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule  } from '@angular/forms';
import {NgSelectModule, } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { BodyContainerComponent } from './body-container/body-container.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    BodyContainerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    
    NgSelectModule,
    

   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
