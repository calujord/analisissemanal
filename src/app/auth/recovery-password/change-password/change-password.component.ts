import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  formGroup!:FormGroup;

  
  ngOnInit(): void {
    this.formGroup=this.fb.group({
      usuario:['',[Validators.required,Validators.email]],
      contrasenaActual:['',[Validators.required,Validators.minLength(3)]],
      nuevaContrasena:['',[Validators.required,Validators.minLength(3)]],
      validacionContrasena:['',[Validators.required,Validators.minLength(3)]]
    },{ validators: this.identityRevealedValidator });
  }
  
 identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const validacionContrasena = control.get('validacionContrasena');
  const nuevaContrasena = control.get('nuevaContrasena');

  return validacionContrasena.value != nuevaContrasena.value ? { coincidencia: true } : null;
};
 onActualizarContrasenas(){

 }
}
