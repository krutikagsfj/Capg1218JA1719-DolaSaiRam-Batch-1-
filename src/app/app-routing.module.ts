import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CarBrandsComponent } from './pages/car-brands/car-brands.component';
import { HeadingComponent } from './pages/heading/heading.component';

const routes: Routes = [
  {path:'',component:HeadingComponent},
  {path:'about', component:AboutComponent},
  {path:'carbands',component:CarBrandsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
