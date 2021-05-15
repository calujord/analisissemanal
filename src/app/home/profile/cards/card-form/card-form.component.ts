import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.sass']
})
export class CardFormComponent implements OnInit {

  formGroup!: FormGroup;
  constructor(
    fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      username: new FormControl('', [Validators.required, Validators.email]),
      chkremember: new FormControl('')
    })
  }

}
