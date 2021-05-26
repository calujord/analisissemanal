import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RequestRecoveryPasswordComponent } from './recovery-password/request-recovery-password/request-recovery-password.component';
import { ChangePasswordComponent } from './recovery-password/change-password/change-password.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
    RequestRecoveryPasswordComponent,
    ChangePasswordComponent,
    AuthenticationComponent,

  ],
  exports: [
  ],
  imports: [
    CommonModule,
    UiModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatRadioModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule
  ],


})
export class AuthModule { }
