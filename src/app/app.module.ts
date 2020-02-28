import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  // A component can only belong to one Angular module
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  // Imports below is where you bring in any external modules that your app needs
  imports: [
    BrowserModule,
    FormsModule
  ],
  // Bootstrap below lists the starting component for the application
  bootstrap: [AppComponent]
})
export class AppModule { }
