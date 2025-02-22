import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductTracklistingComponent } from './product-tracklisting/product-tracklisting.component';
import { ProductListComponent } from './product-list/product-list.component';

const appRoutes:  Routes = [
  { path: 'products', component: ProductListComponent},
  { path: 'product/:id', component: ProductPageComponent}, 
  { path: '', redirectTo: 'products', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    ProductTracklistingComponent,
    ProductListComponent, 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes)
    
    
  ],
  
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
