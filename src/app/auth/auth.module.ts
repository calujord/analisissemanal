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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
    RequestRecoveryPasswordComponent,
    ChangePasswordComponent,
    AuthenticationComponent,

  ],
  exports: [
    MatFormFieldModule,
    MatRippleModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    // MatButtonModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatRippleModule,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule


  ],

})
export class AuthModule { }
