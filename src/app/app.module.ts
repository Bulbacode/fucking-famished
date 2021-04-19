import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RestaurantViewComponent } from './components/restaurant-view/restaurant-view.component';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { DistanceQuestionCardComponent } from './components/distance-question-card/distance-question-card.component';
import { UrgentQuestionCardComponent } from './components/urgent-question-card/urgent-question-card.component';
import { ExtrasQuestionCardComponent } from './components/extras-question-card/extras-question-card.component';
import { PriceQuestionCardComponent } from './components/price-question-card/price-question-card.component';
import { SearchComponent } from './pages/search/search.component';

import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { environment } from 'src/environments/environment';
import { YelpService } from './services/yelp.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RestaurantViewComponent,
    AdBannerComponent,
    DistanceQuestionCardComponent,
    UrgentQuestionCardComponent,
    ExtrasQuestionCardComponent,
    PriceQuestionCardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule
  ],
  providers: [YelpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
