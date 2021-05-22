import { Component, OnInit } from '@angular/core';
import { CreditcardService } from 'src/app/models/cardservice/Card.service';
import { CardModel } from 'src/app/models/rates/rates';
import { StorageService } from 'src/app/services/auth/storage-service';
import { UtilService } from 'src/app/services/utils/utils.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardRemoveComponent } from '../card-remove/card-remove.component';
import { CardFormComponent } from '../card-form/card-form.component';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.sass', './cardlist.component.css']
})
export class CardlistComponent implements OnInit {
  displayedColumns: string[] = ['bin', 'status', 'holder_name', 'type', 'token'];
  dataSource: CardModel[] = [];
  constructor(
    private creditCardService: CreditcardService,
    private stStorage: StorageService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getCards();
  }
  getCards() {

    this.creditCardService.setToken(this.stStorage.getCurrentToken()!);
    this.creditCardService.getCards().then((res) => this.dataSource = res);
  }
  removeCard(card: CardModel) {
    let dialogRef = this.dialog.open(CardRemoveComponent, {
      data: card
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null)
        this.getCards();
    });
  }
  addCard() {
    let dialogRef = this.dialog.open(CardFormComponent,);
    dialogRef.afterClosed().subscribe(result => {
      if (result != null)
        this.getCards();
    });
  }

}
