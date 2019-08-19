import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UsersImagesComponent } from './users-images/users-images.component';

const routes: Routes = [
  { path: 'app-users-images', component: UsersImagesComponent },
  { path: 'app-header', component: HeaderComponent }
  // { path: '**', component: NotFoundPageComponent },
  // { path: '', component: HeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// tslint:disable-next-line:no-trailing-whitespace
export class AppRoutingModule { 

// tslint:disable-next-line:eofline
}