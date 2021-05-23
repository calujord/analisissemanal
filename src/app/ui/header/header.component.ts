import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout.service';
import { StorageService } from 'src/app/services/auth/storage-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass', './header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private stService: StorageService,
    private route: Router,
    private layoutService: LayoutService,
  ) {

  }

  ngOnInit(): void {
  }
  getUserName() {
    return this.stService.getCurrentSession().business.name;
  }
  isAuthenticated(): boolean {
    return this.stService.isAuthenticated();
  }
  logout() {
    this.stService.logout();
    this.route.navigate(["/"]).then();
    this.layoutService.logout();
  }

}
