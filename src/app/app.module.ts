import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

/**
 * Base
 * **/
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';

/**
 * Components
* */
import { HomeComponent } from './components/home/home.component';
import { PoliciesComponent } from './components/policies/policies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PoliciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
