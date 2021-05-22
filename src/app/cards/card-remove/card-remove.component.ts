import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogClose, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreditcardService } from 'src/app/models/cardservice/Card.service';
import { CardModel } from 'src/app/models/rates/rates';
import { StorageService } from 'src/app/services/auth/storage-service';

@Component({
  selector: 'app-card-remove',
  templateUrl: './card-remove.component.html',
  styleUrls: ['./card-remove.component.sass']
})
export class CardRemoveComponent implements OnInit {
  breakpoint = 3;
  constructor(@Inject(MAT_DIALOG_DATA) public card: CardModel,
    private cardService: CreditcardService,
    private storage: StorageService,
    public dialogRef: MatDialogRef<CardRemoveComponent>,
  ) { }

  ngOnInit(): void {

  }

  onDelete() {
    this.cardService.setToken(this.storage.getCurrentToken())
    this.cardService.removeCard(this.card).then((res) => {
      this.dialogRef.close(this.card);
    });
  }

}
