import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule , Routes } from '@angular/router';
import { UsersImagesComponent } from './users-images/users-images.component';
import { MapToIterablePipe } from './map-to-iterable.pipe';


const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersImagesComponent,
    MapToIterablePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
