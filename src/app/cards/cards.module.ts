import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardManagerComponent } from './card-manager/card-manager.component';
import { CardFormComponent } from './card-form/card-form.component';
import { CardRemoveComponent } from './card-remove/card-remove.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    CardManagerComponent,
    CardFormComponent,
    CardRemoveComponent,
    CardlistComponent,

  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    // BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTableModule,


  ]
})
export class CardsModule { }
