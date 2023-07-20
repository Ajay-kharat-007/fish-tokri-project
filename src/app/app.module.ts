import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { ComboOfferComponent } from './components/combo-offer/combo-offer.component';
import { ProductComponent } from './components/product/product.component';
import { YouMayAlsoLikeComponent } from './components/you-may-also-like/you-may-also-like.component';
import { FishtokriExperienceComponent } from './components/fishtokri-experience/fishtokri-experience.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SlickSliderComponent } from './components/slick-slider/slick-slider.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    BestSellerComponent,
    ComboOfferComponent,
    ProductComponent,
    YouMayAlsoLikeComponent,
    FishtokriExperienceComponent,
    CategoryListComponent,
    ContactUsComponent,
    SlickSliderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
