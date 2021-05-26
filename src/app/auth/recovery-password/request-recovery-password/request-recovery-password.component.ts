import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NULL_EXPR, THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { UserService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-request-recovery-password',
  templateUrl: './request-recovery-password.component.html',
  styleUrls: ['./request-recovery-password.component.css']
})
export class RequestRecoveryPasswordComponent implements OnInit {

  constructor(private fb: FormBuilder, private authservice: UserService) { }
  formGroup!: FormGroup;
  formChangePasswordGroup!: FormGroup;
  username: string = "";
  tokenPassword: string = "";
  panel: string = "EMAIL";

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
    }, {});
    this.formChangePasswordGroup = this.fb.group({
      nuevoContrasena: ['', [Validators.required]],
      validadorContrasena: ['', [Validators.required]],
    }, {});
  }
  onActualizarContrasenas() {
    this.username = this.formGroup.get("usuario").value;
    this.authservice.onRequestPassword(this.formGroup.get("usuario").value).then((res) => {
      console.log("pincode");
      this.panel = "PINCODE";
    }).catch((err) => {
      // show errors
      console.log(`${err}`);
    });

  }
  isPinCode(): boolean {
    return this.panel == "PINCODE";
  }
  isEmail(): boolean {
    return this.panel == "EMAIL";
  }
  isChangePassword(): boolean {
    return this.panel == "PASSWORD";
  }

  // this called every time when user changed the code
  onCodeChanged(code: string) {
  }

  // this called only if user entered full code
  onCodeCompleted(code: string) {
    this.authservice.onValidateCode(this.username, code).then((res) => {
      this.tokenPassword = `${res}`;
      console.log(this.tokenPassword);
      this.panel = "PASSWORD";
    }).catch((err) => {

    });
  }

  onChangePassword() {

    this.authservice.onChangePassword(this.formChangePasswordGroup.get("nuevoContrasena").value, this.tokenPassword).then((res) => {
      // modal contraseña actualizada
      console.log("password cahnged");
      this.onCleanAll();
    }).catch((err) => {
      // error de contraseña
    });

  }
  onCleanAll() {
    this.tokenPassword = "";
    this.panel = "EMAIL";
    this.formGroup.reset();
    this.formChangePasswordGroup.reset();

  }
}
