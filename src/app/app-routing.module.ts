import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './auth/authentication/authentication.component';
import { ChangePasswordComponent } from './auth/recovery-password/change-password/change-password.component';
import { RequestRecoveryPasswordComponent } from './auth/recovery-password/request-recovery-password/request-recovery-password.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ContactComponent } from './discovery/pages/contact/contact.component';
import { ProductComponent } from './discovery/pages/products/product.component';
import { StaffComponent } from './discovery/pages/staff/staff.component';
import { SearchComponent } from './discovery/search/search.component';
import { FrontendModule } from './frontend/frontend.module';
import { DiscoveryComponent } from './home/discovery/discovery.component';
import { HomeComponent } from './home/home/home.component';
import { SettingsModule } from './settings/settings.module';

const routes: Routes = [

  { path: 'login', component: AuthenticationComponent },

  { path: 'discovery', component: SearchComponent },

  { path: 'products', component: ProductComponent },

  { path: 'staff', component: StaffComponent },

  { path: 'contact', component: ContactComponent },

  { path: 'category/:id', component: SearchComponent },
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
  { path: 'settings', loadChildren: () => SettingsModule },
  { path: '', loadChildren: () => FrontendModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
