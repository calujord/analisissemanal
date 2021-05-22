import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-recovery-password',
  templateUrl: './request-recovery-password.component.html',
  styleUrls: ['./request-recovery-password.component.css']
})
export class RequestRecoveryPasswordComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  formGroup!:FormGroup;

  ngOnInit(): void {
    this.formGroup=this.fb.group({
      usuario:['',[Validators.required,Validators.email]],
    });
  }
}
