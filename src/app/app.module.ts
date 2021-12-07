import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent, 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
