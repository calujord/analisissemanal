import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { SettingsModule } from './settings/settings.module';
import { CardsModule } from './cards/cards.module';
import { FrontendModule } from './frontend/frontend.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './ui/header/header.component';
import { DiscoveryModule } from './discovery/discovery.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule,
    MatListModule,
    MatSidenavModule,
    MatCarouselModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    CardsModule,
    SettingsModule,
    FrontendModule,
    HomeModule,
    AuthModule,
    DiscoveryModule,



  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
