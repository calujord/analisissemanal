import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FrontendBaseComponent } from './frontend-base/frontend-base.component';
import { FrontendWhoareComponent } from './frontend-whoare/frontend-whoare.component';
import { FrontendStaffComponent } from './frontend-staff/frontend-staff.component';
import { FrontendServicesComponent } from './frontend-services/frontend-services.component';
import { FrontendContactComponent } from './frontend-contact/frontend-contact.component';
import { FrontendHomeComponent } from './frontend-home/frontend-home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FrontendRoutingModule } from './frontend.routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UiModule } from '../ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditionCardItemComponent } from '../edition-card-item/edition-card-item.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    FrontendWhoareComponent,
    FrontendStaffComponent,
    FrontendServicesComponent,
    FrontendContactComponent,
    FrontendBaseComponent,
    FrontendHomeComponent,
    EditionCardItemComponent,

  ],
  entryComponents: [

  ],
  imports: [
    CommonModule,

    FrontendRoutingModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    UiModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatExpansionModule,


  ],

  exports: [EditionCardItemComponent]

})
export class FrontendModule { }
