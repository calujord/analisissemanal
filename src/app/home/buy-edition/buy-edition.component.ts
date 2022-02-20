import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertMessageComponent } from 'src/app/alert-message/alert-message.component';
import { CardFormComponent } from 'src/app/cards/card-form/card-form.component';
import { CreditcardService } from 'src/app/models/cardservice/Card.service';
import { EditionRead } from 'src/app/models/home/home.model';
import { CardModel } from 'src/app/models/rates/rates';
import { StorageService } from 'src/app/services/auth/storage-service';
import { EditionService } from 'src/app/services/edition-service/EditionServices';
import { UtilService } from 'src/app/services/utils/utils.service';
import { TermsConditionComponent } from '../terms-condition/terms-condition.component';

@Component({
  selector: 'app-buy-edition',
  templateUrl: './buy-edition.component.html',
  styleUrls: ['./buy-edition.component.css']
})
export class BuyEditionComponent implements OnInit {

  @Input() edition: EditionRead;
  constructor(
    private utilsService: UtilService,
    private creditCardService: CreditcardService,
    private dialog: MatDialog,
    private stService: StorageService,
    private editionService: EditionService,) { }
  public cardList: CardModel[] = [];
  public cardSelected: CardModel;
  public checked: boolean = false;

  @Output()
  onSuccessSubscription = new EventEmitter<boolean>();
  ngOnInit(): void {

    this.creditCardService.setSession(this.stService.getCurrentSession());
    this.creditCardService.getCards().then((res) => {
      this.cardList = res;
    })
  }
  getTotalPay() {
    return this.edition.edition.price * 1.12;
  }
  onSuccess() {
    this.onSuccessSubscription.emit();
  }


  onOpenTermsAndCondition(ev) {

    if (this.checked == true) {
      let dialogTerms = this.dialog.open(TermsConditionComponent, {
      });

      dialogTerms.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.checked = result;
      });
    }
  }
  onOpenDialogCreditCard() {
    let dialogRef = this.dialog.open(CardFormComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res != null) {
        this.cardSelected = res;
        this.cardList.push(res);
      }
    });

  }
  onPayEdition() {

    this.editionService.setSession(this.stService.getCurrentSession());
    this.editionService.payEdition(this.cardSelected, this.edition.edition.pk).then((res) => {
      this.onSuccess();
    }).catch((err) => {
      let dialogRef = this.dialog.open(AlertMessageComponent, {
        width: '280px',
        data: { message: "Existió un error al pagar la edición", title: "Error" }
      });

    });
  }

}
