import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Who1Component } from './who1/who1.component';
import { Who2Component } from './who2/who2.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgToggleModule } from 'ng-toggle-button';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    Who1Component,
    Who2Component,
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    NgToggleModule.forRoot(), //or NgToggleModule
    IvyCarouselModule,
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
