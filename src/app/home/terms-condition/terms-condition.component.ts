import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UtilService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.css']
})
export class TermsConditionComponent implements OnInit {
  terms: String;
  constructor(
    public dialogRef: MatDialogRef<TermsConditionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string },
    private utilsService: UtilService,

  ) { }

  ngOnInit(): void {
    this.utilsService.getTerms().then((e) => {
      this.terms = e["terms"].split('\n').join("<br />");
    });
  }
  onOk(): void {
    this.dialogRef.close(true);
  }
  onCancel(): void {
    this.dialogRef.close(false);
  }

}
