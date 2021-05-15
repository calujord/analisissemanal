import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './auth/authentication/authentication.component';
import { ChangePasswordComponent } from './auth/recovery-password/change-password/change-password.component';
import { RequestRecoveryPasswordComponent } from './auth/recovery-password/request-recovery-password/request-recovery-password.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: '', component: AuthenticationComponent
  },
  {
    path: 'create-account', component: SignInComponent
  },
  {
    path: 'recovery-password', component: RequestRecoveryPasswordComponent
  },
  {
    path: 'change-password', component: ChangePasswordComponent
  },
  {
    path: 'home', component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
