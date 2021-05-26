import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { UserService } from 'src/app/services/auth/auth.service';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-request-recovery-password',
  templateUrl: './request-recovery-password.component.html',
  styleUrls: ['./request-recovery-password.component.css']
})
export class RequestRecoveryPasswordComponent implements OnInit {

  constructor(private fb: FormBuilder, private authservice: UserService, private dialogo: MatDialog) { }
  formGroup!: FormGroup;
  onActualizarContrasenas(): void{

  }
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      usuario: ['', {
        validators: [Validators.required, Validators.email, this.validadorCorreoAsyn],
        asyncValidators: [this.validadorCorreoAsyn()],
        updateOn: 'blur'
      }],
      digitos: ['', [Validators.required]],
      nuevoContrasena: ['', [Validators.required, Validators.minLength(5)]],
      validadorContrasena: ['', [Validators.required, Validators.minLength(5)]]
    }, {});
  }

  validadorCorreoAsyn(): AsyncValidatorFn {
    console.log('validador');
    return (usuario: AbstractControl) => {
      return this.authservice.onRequestPassword(usuario.value).then((res: {success: boolean }) => {
        if (res.success){
          return null;
        }else{
          return { inexistente: true };
        }

      }).catch((err) => {
        console.log(err);
        return { inexistente: true };
      });
    };
  }

}
