import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StatsComponent } from './pages/stats/stats.component';

const routes: Routes = [

  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contact/edit/:id', component: EditPageComponent },
  { path: 'contact/edit', component: EditPageComponent },
  { path: 'contact/:_id', component: ContactDetailsComponent },
  { path: 'contact', component: ContactComponent, },
  { path: 'stats', component: StatsComponent, },
  { path: 'signup', component: SignupComponent, },
  { path: '', component: HomepageComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
