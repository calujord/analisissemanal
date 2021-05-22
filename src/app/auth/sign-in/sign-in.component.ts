import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout.service';
import { BusinessCreateAccount } from 'src/app/models/business/business-create-account';
import { BusinessModel } from 'src/app/models/business/business.models';
import { Area, Country } from 'src/app/models/utils';
import { UserService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/auth/storage-service';
import { HomeService } from 'src/app/services/home/home.service';
import { AuthComponentService } from '../AuthComponentService';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  hide_pass1: Boolean = true;
  hide_pass2: Boolean = true;
  selectBusinessFromGroup!: FormGroup;
  fiscalFormGroup!: FormGroup;
  countryList: Country[] = [];
  areaList: Area[] = [];
  userFormGroup!: FormGroup;
  business: BusinessModel = {
    pk: 0,
    identification: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    area: null,
    country: null,
    type_payment: null,
    person_type: 'B',
    avatar: null,
  }

  constructor(
    private authService: UserService,
    private homeService: HomeService,
    private stService: StorageService,
    private router: Router,
    fb: FormBuilder,

    private layoutSevice: LayoutService
  ) { }

  ngOnInit(): void {
    this.layoutSevice.hideSideBar();
    this.layoutSevice.hideNavBar();
    this.homeService.getCountries().then((res) => this.countryList = res);
    this.homeService.getAreas().then((res) => this.areaList = res);

  }
  
  stepLabel2='Información fiscal';
  stepLabel3='Información usuario';

  onSignIn() {
    /*
    this.authService.onCreateAccount().then((res: BusinessCreateAccount) => {
      this.stService.setCurrentSession(res);
      this.router.navigate(['/home']).then();
    });
    */
  }

}
