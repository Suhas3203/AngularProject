import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllDetailsComponent } from './CRUDoperations/get-all-details/get-all-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterNewUserComponent } from './register-new-user/register-new-user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TourismPlacesComponent } from './tourism-places/tourism-places.component';

const routes: Routes = [
  { path: 'allPlaces', component: TourismPlacesComponent},
  { path: 'homePage', component: HomePageComponent },
  { path: 'signIn', component: SignInComponent},
  { path: 'register', component:RegisterNewUserComponent },
  { path: 'getAllUsersList', component: GetAllDetailsComponent },
  { path: '' , redirectTo:'homePage', pathMatch:'full' },
  { path: '**' , redirectTo :'Page not Found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
