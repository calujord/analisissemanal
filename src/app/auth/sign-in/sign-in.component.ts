import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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
  /* hide_pass1: Boolean = true;
  hide_pass2: Boolean = true;
  formgroup: FormGroup;
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
  } */
  fiscalFormGroup: FormGroup
  userFormGroup: FormGroup
  stepLabel2 = 'Información fiscal';
  stepLabel3 = 'Información usuario';
  countryList: Country[] = [];
  constructor(
    private authService: UserService,
    private homeService: HomeService,
    private stService: StorageService,
    private router: Router,
    private fb: FormBuilder,
    private layoutSevice: LayoutService
  ) { }

  ngOnInit(): void {

    this.layoutSevice.hideSideBar();
    this.layoutSevice.hideNavBar();
    this.homeService.getCountries().then((res) => this.countryList = res);
    //  this.homeService.getAreas().then((res) => this.areaList = res);
    this.fiscalFormGroup = this.fb.group({
      identificacionfc: ['', [Validators.required, Validators.minLength(6)]],
      namefc: ['', [Validators.required, Validators.minLength(2)]],
      countryfc: ['', [Validators.required]],
      cityfc: ['', [Validators.required]],
      phonefc: ['', [Validators.required, Validators.minLength(6)]],
      addressfc: ['', [Validators.required]],
      person_typefc: ['B', [Validators.required]]
    });

    this.userFormGroup = this.fb.group({
      correofc: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(4)]],
      validarcontrasena: ['', [Validators.required]]
    }, { validators: this.validadorParContrasena });


  }

  saveRegister() {
    let business: BusinessModel = {
      identification: this.fiscalFormGroup.get("identificacionfc").value,
      name: this.fiscalFormGroup.get("namefc").value,
      email: this.userFormGroup.get("correofc").value,
      phone: this.fiscalFormGroup.get("phonefc").value,
      address: this.fiscalFormGroup.get("addressfc").value,
      city: this.fiscalFormGroup.get("cityfc").value,
      country: this.fiscalFormGroup.get("countryfc").value,
      person_type: this.fiscalFormGroup.get("person_typefc").value,
    };
    this.authService.onCreateAccount(
      this.userFormGroup.get("correofc").value,
      this.userFormGroup.get("contrasena").value,
      business
    ).then((res: BusinessCreateAccount) => {
      this.stService.setCurrentSession(res);
      this.router.navigate(['/']).then();
    });
  }
  validadorParContrasena: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const validacionContrasena = control.get('validarcontrasena');
    const nuevaContrasena = control.get('contrasena');
    return validacionContrasena.value != nuevaContrasena.value ? { coincidencia: true } : null;
  };

}
