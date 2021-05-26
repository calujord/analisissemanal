import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
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

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      usuario: ['', {
        validators: [Validators.required, Validators.email],
        asyncvalidators: [this.validadorCorreoAsyn],
        updateOn: 'change'
      }],
      digitos: ['', [Validators.required]],
      nuevoContrasena: ['', [Validators.required, Validators.minLength(5)]],
      validadorContrasena: ['', [Validators.required, Validators.minLength(5)]]
    }, {});
  }
  onActualizarContrasenas() {

  }

  validadorCorreoAsyn(): AsyncValidatorFn {
    console.log("=====>");
    return (usuario: AbstractControl) => {
      return this.authservice.onRequestPassword(this.formGroup.get("usuario").value).then((res) => {
        return null;
      }).catch((err) => {
        return { "correo no existe": true };
      });
    }
  }
}
