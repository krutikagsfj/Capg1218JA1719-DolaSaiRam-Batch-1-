import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { CarBrandsComponent } from './pages/car-brands/car-brands.component';
import { HttpClientModule} from '@angular/common/http';
import { HeadingComponent } from './pages/heading/heading.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CarBrandsComponent,
    HeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
