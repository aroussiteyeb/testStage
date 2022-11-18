import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { Who1Component } from './who1/who1.component';
import { Who2Component } from './who2/who2.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [

  { path: '', component: AccueilComponent },
  { path: 'who1', component: Who1Component },
  { path: 'who2', component: Who2Component },
  { path: 'footer', component: FooterComponent },
  { path: 'navigation', component: NavigationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
