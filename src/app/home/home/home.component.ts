import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditionPreviewComponent } from 'src/app/home/edition-preview/edition-preview.component';
import { BusinessAuthentication } from 'src/app/models/business/business-authentication';
import { Edition, HomeModel } from 'src/app/models/home/home.model';
import { RateModel } from 'src/app/models/rates/rates';
import { Area, Country } from 'src/app/models/utils';
import { StorageService } from 'src/app/services/auth/storage-service';
import { HomeService } from 'src/app/services/home/home.service';
import { UtilService } from 'src/app/services/utils/utils.service';
import { HomeModule } from '../home.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass', './home.component.css']
})
export class HomeComponent implements OnInit {
  public businessAuth?: BusinessAuthentication;
  public areas: Area[] = [];
  public countries: Country[] = [];
  public rates: RateModel[] = [];
  public homeModel: HomeModel = null;
  breakpoint = 3;
  constructor(
    private storageService: StorageService,
    private utilService: UtilService,
    private homeService: HomeService,
    private dialog: MatDialog
  ) { }
  ngOnInit(): void {
    this.businessAuth = this.storageService.getCurrentSession();
    this.utilService.getAreas().then((res) => this.areas = res);
    this.utilService.getCountries().then((res) => this.countries = res);
    this.utilService.getRates().then((res) => this.rates = res);
    this.homeService.getHome().then((res) => this.homeModel = res);
  }

  onResize($event) {
    console.log(window.innerWidth);
    if (window.innerWidth > 1300) this.breakpoint = 4;
    else if (window.innerWidth <= 1200 && window.innerWidth > 970) this.breakpoint = 3;
    else if (window.innerWidth <= 970 && window.innerWidth > 600) this.breakpoint = 2;

  }

}
