import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BusinessSubscriptionAddress, BusinessSubscriptionAddressList } from 'src/app/models/business/business.models';
import { StorageService } from 'src/app/services/auth/storage-service';
import { BusinessService } from 'src/app/services/business/business-service';
import { SubscriptionAddressFormComponent } from '../subscription-address-form/subscription-address-form.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  public bsal: BusinessSubscriptionAddressList
  constructor(
    private storageService: StorageService,
    private businessService: BusinessService,
    private dialog: MatDialog,
  ) { }
  displayedColumns: string[] = ['name', 'full_address', 'phone', 'city', 'action'];
  ngOnInit(): void {
    this.businessService.setSession(this.storageService.getCurrentSession());
    this.businessService.getListAdressSubscription().then((res) => {
      this.bsal = res;
    });
  }

  getEditionByLang(lang: String): BusinessSubscriptionAddress[] {
    if (this.bsal != null)
      return this.bsal.object_list.filter(lang == "ES" ? this.filterSpanish : this.filterEnglish);
    else return []
  }

  private filterSpanish(element, index, array) {
    return element.edition_physical == "ES";
  }
  private filterEnglish(element, index, array) {
    return element.edition_physical == "EN";
  }
  updateData(data) {
    console.log(data);
    let dialogRef = this.dialog.open(SubscriptionAddressFormComponent, {
      width: '400px',
      data: data
    });
  }
}
