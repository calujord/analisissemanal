import { Component, OnInit } from '@angular/core';
import { BalanceListModel } from 'src/app/models/business/balance.model';
import { StorageService } from 'src/app/services/auth/storage-service';
import { PaymentService } from './payment.services';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {
  balanceList: BalanceListModel;
  constructor(
    private balanceService: PaymentService,
    private storage: StorageService,
  ) { }

  ngOnInit(): void {
    this.balanceService.setToken(this.storage.getCurrentToken());
    this.balanceService.getBalanceList().then((res) => { this.balanceList = res })
  }
  displayedColumns: string[] = ['date_created', 'billing_number', 'url_invoice'];
}
