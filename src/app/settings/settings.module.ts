import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { DevicesComponent } from './devices/devices.component';
import { PaymentComponent } from './payment/payment.component';
import { SettingsRoutingModule } from './settings.routing.module';
import { SettingsManageComponent } from './settings-manage/settings-manage.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { SubscriptionAddressFormComponent } from './subscription-address-form/subscription-address-form.component';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { CardsModule } from '../cards/cards.module';



@NgModule({
  declarations: [
    ProfileComponent,
    SubscriptionComponent,
    DevicesComponent,
    PaymentComponent,
    SettingsManageComponent,
    SubscriptionAddressFormComponent,

  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    SettingsRoutingModule,
    MatListModule,
    MatFormFieldModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,


  ],
})
export class SettingsModule { }
