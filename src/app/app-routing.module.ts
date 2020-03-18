import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { KokkenComponent} from './kokken/kokken.component';
import { RegnoringComponent} from './regnoring/regnoring.component';
import { AboutUsComponent } from './our-services/about-us.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },

  { path: 'kokken', component: KokkenComponent },
  { path: 'regnoring', component: RegnoringComponent },
  { path: 'our-services', component: AboutUsComponent },
  { path: 'gallery', component: RegnoringComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
