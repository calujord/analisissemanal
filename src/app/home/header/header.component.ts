import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  ) {

  }

  ngOnInit(): void {
  }

  logout() {
    this.stService.logout();
    this.route.navigate(["/"]).then();
  }

}
