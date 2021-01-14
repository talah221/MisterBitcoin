import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactsListComponent } from './cmps/contacts-list/contacts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsPreviewComponent } from './cmps/contacts-preview/contacts-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { FilterContactComponent } from './cmps/filter-contact/filter-contact.component';
import { FormsModule } from '@angular/forms';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { AddContactComponent } from './cmps/add-contact/add-contact.component';
import { NavbarComponent } from './cmps/navbar/navbar.component';
import { StatsComponent } from './pages/stats/stats.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { SignupComponent } from './pages/signup/signup.component';
import { TransferComponent } from './cmps/transfer/transfer.component';
import { MoveslistComponent } from './cmps/moveslist/moveslist.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactComponent,
    ContactsListComponent,
    ContactsPreviewComponent,
    ContactDetailsComponent,
    FilterContactComponent,
    EditPageComponent,
    AddContactComponent,
    NavbarComponent,
    StatsComponent,
    ChartComponent,
    SignupComponent,
    TransferComponent,
    MoveslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleChartsModule,
    StoreModule.forRoot({ user: reducer }),
    BrowserAnimationsModule,
    ToastrModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
