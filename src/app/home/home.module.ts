import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DiscoveryComponent } from './discovery/discovery.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { CreditcardComponent } from './profile/creditcard/creditcard.component';
import { SubscriptionComponent } from './profile/subscription/subscription.component';
import { DevicesComponent } from '../devices/devices.component';
import { FiscalInformationComponent } from '../fiscal-information/fiscal-information.component';
import { PaymentComponent } from './profile/payment/payment.component';
import { HeaderComponent } from './header/header.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field/form-field-module';
import { MatInputModule } from '@angular/material/input/input-module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CardlistComponent } from './profile/cards/cardlist/cardlist.component';
import { CardFormComponent } from './profile/cards/card-form/card-form.component';
import { MatTableModule } from '@angular/material/table';
import { CardRemoveComponent } from './profile/cards/card-remove/card-remove.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    HeaderComponent,
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

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDialogModule

  ]
})
export class HomeModule { }
