import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  // A component can only belong to one Angular module
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  // Imports below is where you bring in any external modules that your app needs
  imports: [
    BrowserModule
  ],
  // Bootstrap below lists the starting component for the application
  bootstrap: [AppComponent]
})
export class AppModule { }
