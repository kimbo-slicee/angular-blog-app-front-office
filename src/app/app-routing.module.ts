import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {SingleCategoryComponent} from "./pages/single-category/single-category.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {TermsConditionsComponent} from "./pages/terms-conditions/terms-conditions.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {SinglePostComponent} from "./pages/single-post/single-post.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'category',component:SingleCategoryComponent},
  {path:'about',component:AboutUsComponent},
  {path:'term-conditions', component:TermsConditionsComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'single-post',component:SinglePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
