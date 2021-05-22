import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertMessageComponent } from 'src/app/alert-message/alert-message.component';
import { CreditcardService } from 'src/app/models/cardservice/Card.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  month: String;
  yearSelected: number;
  formGroup!: FormGroup;
  year: number = (new Date()).getFullYear();
  constructor(
    fb: FormBuilder,
    private creditCardService: CreditcardService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<CardFormComponent>,
    @Inject(MAT_DIALOG_DATA) data,
  ) { }

  @Output()
  onCardSelected = new EventEmitter<number>();

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      cardNumber: new FormControl('', [Validators.required]),
      cardName: new FormControl('', [Validators.required]),
      cardMonth: new FormControl('', [Validators.required]),
      cardYear: new FormControl('', [Validators.required]),
      cardCVC: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {

    this.creditCardService.addCard(
      this.formGroup.get("cardNumber").value,
      this.formGroup.get("cardName").value,
      Number(this.month),
      Number(this.yearSelected),
      this.formGroup.get("cardCVC").value,
    ).then((res) => {
      if (res["error"] != null)
        this.onShowError(res["error"].type);
      else
        this.dialogRef.close(res);
    }).catch((err) => {
      this.onShowError(err);
    });
  }
  onShowError(err) {
    let dialogRef = this.dialog.open(AlertMessageComponent, {
      width: '280px',
      data: { message: err, title: "Error" }
    });
  }

}
