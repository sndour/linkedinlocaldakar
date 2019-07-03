import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PaiementService } from './paiement.service';
import { SponsorsContactComponent } from './sponsors-contact/sponsors-contact.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoggedComponent } from './admin-logged/admin-logged.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sponsors', component: SponsorsContactComponent}, 
  { path: 'login', component:AdminComponent}, 
  { path: 'admin', component:AdminLoggedComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SponsorsContactComponent,
    HeaderAdminComponent,
    AdminComponent,
    AdminLoggedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes,  {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule],
  providers: [PaiementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
