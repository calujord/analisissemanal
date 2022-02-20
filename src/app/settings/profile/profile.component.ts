import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BusinessAuthentication } from 'src/app/models/business/business-authentication';

import { BusinessModel } from 'src/app/models/business/business.models';
import { Area, Country } from 'src/app/models/utils';
import { StorageService } from 'src/app/services/auth/storage-service';
import { BusinessService } from 'src/app/services/business/business-service';
import { UtilService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  businessProfileForm!: FormGroup;
  businessSession: BusinessAuthentication;
  business: BusinessModel;
  countryList: Country[];
  cities: Area[];
  constructor(
    fb: FormBuilder,
    private storageService: StorageService,
    private utilService: UtilService,
    private businessService: BusinessService,
  ) { }

  ngOnInit(): void {
    this.utilService.getCountries().then((res) => {
      this.countryList = res;
    });
    this.utilService.getAreas().then((res) => {
      this.cities = res;
    });
    this.businessSession = this.storageService.getCurrentSession();
    this.business = this.businessSession.business;
    this.businessProfileForm = new FormGroup({
      username: new FormControl(this.business.email, [Validators.required, Validators.email]),
      ruc: new FormControl(this.business.identification, [Validators.required]),
      fiscal_name: new FormControl(this.business.name, [Validators.required]),
      person_type: new FormControl(this.business.person_type, [Validators.required]),
      city: new FormControl(this.business.city, [Validators.required]),
      area: new FormControl(this.business.area != null ? this.business.area.pk : null),
      phone: new FormControl(this.business.phone, [Validators.required]),
      country: new FormControl(this.business.country.pk, [Validators.required]),
      address: new FormControl(this.business.address, [Validators.required]),
    });
    // this.business = new BusinessModel();
  }
  saveBusiness() {
    let business: BusinessModel = {
      identification: this.businessProfileForm.get("ruc").value,
      name: this.businessProfileForm.get("fiscal_name").value,
      person_type: this.businessProfileForm.get("person_type").value,
      city: this.businessProfileForm.get("city").value,
      country: this.getCountryByPk(this.businessProfileForm.get("country").value),
      area: this.getAreaByPk(this.businessProfileForm.get("area").value),
      email: this.businessProfileForm.get("username").value,
      address: this.businessProfileForm.get("address").value,
      phone: this.businessProfileForm.get("phone").value,

    };
    this.businessService.setSession(this.storageService.getCurrentSession());
    this.businessService.saveFiscalInformation(business).then((business) => {
      this.storageService.setBusiness(business);
    });
  }
  getCountryByPk(pk: number): Country {
    if (pk == null)
      return null;
    else {
      return this.countryList.find(myObj => myObj.pk == pk);
    }
  }
  getAreaByPk(pk: number): Area {
    if (pk == null)
      return null;
    else {
      return this.cities.find(myObj => myObj.pk == pk);
    }
  }

}
