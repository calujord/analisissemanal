import { Component, OnInit } from '@angular/core';
import { BusinessAuthentication } from 'src/app/models/business/business-authentication';
import { RateModel } from 'src/app/models/rates/rates';
import { Area, Country } from 'src/app/models/utils';
import { StorageService } from 'src/app/services/auth/storage-service';
import { UtilService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public businessAuth?: BusinessAuthentication;
  public areas: Area[] = [];
  public countries: Country[] = [];
  public rates: RateModel[] = [];
  constructor(
    private storageService: StorageService,
    private utilService: UtilService,
  ) { }
  ngOnInit(): void {
    this.businessAuth = this.storageService.getCurrentSession();
    this.utilService.getAreas().then((res) => this.areas = res);
    this.utilService.getCountries().then((res) => this.countries = res);
    this.utilService.getRates().then((res) => this.rates = res);
  }

}
