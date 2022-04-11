import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddListingComponent } from './add-listing/add-listing.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewAllListingsComponent } from './view-all-listings/view-all-listings.component';

const routes: Routes = [{path: "", component: SignInComponent}, {path: "add-listing", component: AddListingComponent}, {path:"sign-up", component: SignUpComponent}, {path: "view-all-listings", component: ViewAllListingsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
