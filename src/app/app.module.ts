import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './home/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  exports: [
  ],
  imports: [
    MatProgressSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCarouselModule,
    MatCheckboxModule,
    MatCardModule,
    FlexLayoutModule,
    AuthModule,
    HomeModule,
    MatMenuModule


  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
