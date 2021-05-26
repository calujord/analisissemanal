import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BannerComponent } from './banner/banner.component';
import { MatCardModule } from '@angular/material/card';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { DialogoerrorComponent } from './dialogoerror/dialogoerror.component';
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    DialogoerrorComponent,
  ],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatCardModule,
        MatCarouselModule,
        RouterModule,
        MatDialogModule,
    ],
  exports: [HeaderComponent, BannerComponent]
})
export class UiModule { }
