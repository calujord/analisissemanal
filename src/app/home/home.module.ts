import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DiscoveryComponent } from './discovery/discovery.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { CreditcardComponent } from './profile/creditcard/creditcard.component';
import { SubscriptionComponent } from './profile/subscription/subscription.component';
import { DevicesComponent } from '../configuration_app/devices/devices.component';
import { FiscalInformationComponent } from '../configuration_app/fiscal-information/fiscal-information.component';
import { PaymentComponent } from './profile/payment/payment.component';
import { HeaderComponent } from './header/header.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CardlistComponent } from './profile/cards/cardlist/cardlist.component';
import { CardFormComponent } from './profile/cards/card-form/card-form.component';
import { MatTableModule } from '@angular/material/table';
import { CardRemoveComponent } from './profile/cards/card-remove/card-remove.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import {
  MatFormFieldModule, MatLabel
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatCommonModule } from '@angular/material/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { EditionPreviewComponent } from './edition-preview/edition-preview.component';
import { EditionReadComponent } from './edition-read/edition-read.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ConfigurationComponent } from '../configuration_app/configuration/configuration.component';
import { SpinnersAngularModule } from 'spinners-angular';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditionCardItemComponent } from '../edition-card-item/edition-card-item.component';




@NgModule({
  declarations: [
    HomeComponent,
    DiscoveryComponent,
    ProfileComponent,
    CreditcardComponent,
    SubscriptionComponent,
    DevicesComponent,
    FiscalInformationComponent,
    PaymentComponent,
    CardlistComponent,
    CardFormComponent,
    CardRemoveComponent,
    EditionPreviewComponent,
    SubscribeComponent,
    ConfigurationComponent,
    EditionCardItemComponent


  ],
  entryComponents: [EditionPreviewComponent],
  exports: [
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatCommonModule,

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCarouselModule,
    SpinnersAngularModule,
    PdfViewerModule,
    FlexLayoutModule,
    MatMenuModule


  ]
})
export class HomeModule { }
