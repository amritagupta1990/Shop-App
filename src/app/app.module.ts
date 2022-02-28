import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { StoreModule } from '@ngrx/store';
import { StateModel } from './models/state.model';
import { shopReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ShopEffect } from './store/effects';

const routes : Routes= [
  { path: 'product-list', component: ProductListComponent},
  { path: 'cart-list', component: CartListComponent},
  { path: '', redirectTo: 'product-list', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HeaderComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({shop: shopReducer}),
    EffectsModule.forRoot([ShopEffect])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
