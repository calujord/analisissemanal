import { Component, OnInit } from '@angular/core';
import { BusinessAuthentication } from 'src/app/models/business/business-authentication';
import { HomeModel } from 'src/app/models/home/home.model';
import { StorageService } from 'src/app/services/auth/storage-service';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-frontend-home',
  templateUrl: './frontend-home.component.html',
  styleUrls: ['./frontend-home.component.css']
})
export class FrontendHomeComponent implements OnInit {
  public businessAuth?: BusinessAuthentication;
  bannerList: [] = [];
  public homeModel: HomeModel = null;
  constructor(
    private storageService: StorageService,
    private homeService: HomeService,
  ) { }

  ngOnInit(): void {
    this.businessAuth = this.storageService.getCurrentSession();
    this.homeService.getHome().then((res) => this.homeModel = res);
  }

}
