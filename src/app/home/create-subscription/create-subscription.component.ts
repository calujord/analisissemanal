import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AlertMessageComponent } from 'src/app/alert-message/alert-message.component';
import { CreditcardService } from 'src/app/models/cardservice/Card.service';
import { CardModel, RateModel } from 'src/app/models/rates/rates';
import { BusinessSubscriptionPurchase } from 'src/app/models/transaction/business_transaction';
import { EditionService } from 'src/app/services/edition-service/EditionServices';
import { UtilService } from 'src/app/services/utils/utils.service';
import { CardFormComponent } from '../../cards/card-form/card-form.component';
import { TermsConditionComponent } from '../terms-condition/terms-condition.component';

@Component({
  selector: 'app-create-subscription',
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.css']
})
export class CreateSubscriptionComponent implements OnInit {
  public ratesList: RateModel[] = [];
  public rateSelected: RateModel;
  public deviceEs = 1;
  public deviceEn = 1;
  public printerEs = 0;
  public printerEn = 0;
  public subscriptionSuccess = false;
  public cardList: CardModel[] = [];
  public cardSelected: CardModel;
  public bsp: BusinessSubscriptionPurchase;
  public checked: boolean = false;
  constructor(
    private utilsService: UtilService,
    private creditCardService: CreditcardService,
    private dialog: MatDialog,
    private editionService: EditionService,
  ) { }

  @Output()
  onSuccessSubscription = new EventEmitter<boolean>();


  ngOnInit(): void {
    this.utilsService.getRates().then((res) => {
      this.ratesList = res;
      this.rateSelected = res[0];
    });
    this.creditCardService.getCards().then((res) => {
      this.cardList = res;
    })
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

  readEdition() {
    this.onSuccessSubscription.emit();
  }
  onChangeDevicesEs(x: number) {
    this.deviceEs = x;
  }
  onChangeDevicesEn(x: number) {
    this.deviceEn = x;
  }
  onChangePrinterEn(x: number) {
    this.printerEn = x;
  }
  onChangePrinterEs(x: number) {
    this.printerEs = x;
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
  getRateEnPh(): number {
    return this.rateSelected.physical_price_en * this.printerEn;
  }
  getRateEsPh(): number {
    return this.rateSelected.physical_price_es * this.printerEs;
  }
  getExtraDeviceES() {
    return this.rateSelected.price_extra_device * this.getExtraDeviceByLang("es");
  }
  getExtraDeviceEN() {
    return this.rateSelected.price_extra_device * this.getExtraDeviceByLang("en");
  }

  getImporte(): number {

    return this.rateSelected.base_price +
      this.getRateEnPh() +
      this.getRateEsPh() +
      this.getExtraDeviceES() +
      this.getExtraDeviceEN();
  }

  getImpuesto() {
    return this.getImporte() * this.rateSelected.tax / 100;
  }
  getTotal() {
    return this.getImporte() + this.getImpuesto();
  }

  getExtraDeviceByLang(lang): number {
    return this.getDevicesExtra()[lang];
  }
  getDevicesExtra() {
    if (this.rateSelected.devices_allowed >= this.deviceEn + this.deviceEs) {
      return { "es": 0, "en": 0 };
    } else {
      if (this.rateSelected.devices_allowed <= this.deviceEn) {
        return {
          "es": this.deviceEs,
          "en": this.deviceEn - this.rateSelected.devices_allowed
        };
      } else if (this.rateSelected.devices_allowed <= this.deviceEs) {
        return {
          "es": this.deviceEs - this.rateSelected.devices_allowed,
          "en": this.deviceEn
        };
      } else {
        return {
          "es": this.deviceEs + this.deviceEn - this.rateSelected.devices_allowed,
          "en": 0
        };
      }
    }
  }
  doSubscription() {
    this.editionService.subscribeAS(
      this.rateSelected,
      this.cardSelected,
      this.printerEn,
      this.printerEs,
      this.deviceEn,
      this.deviceEs,
    ).then((res) => {
      this.bsp = res;
      this.subscriptionSuccess = true;
    }).catch((err) => {
      this.onShowError(err[0]["value"]);
    });
  }
  onShowError(err) {
    let dialogRef = this.dialog.open(AlertMessageComponent, {
      height: '200px',
      width: '305px',
      data: { message: err, title: "Error" }
    });
  }
}
