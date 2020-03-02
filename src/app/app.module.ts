import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  /* A component can only belong to only one Angular module
   Only declare components, directives, and pipes (CDPs) that belong to this module
   By default, CDPs are private to the module using them. They cannot be shared between modules
   To share another module's CDPs, they must be exported from their module, and then their module can be imported  */
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  // Imports below is where you bring in any external modules that your app needs
  imports: [
    // AppModule normally imports BrowserModule
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( [
      { path: 'welcome', component: WelcomeComponent },
      { path: '', component: WelcomeComponent },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  // Bootstrap below lists the starting component for the application. It is ONLY used in the main AppModule
  bootstrap: [AppComponent]
})
export class AppModule { }
