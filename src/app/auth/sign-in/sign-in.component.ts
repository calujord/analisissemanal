import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessCreateAccount } from 'src/app/models/business/business-create-account';
import { UserService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/auth/storage-service';
import { AuthComponentService } from '../AuthComponentService';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

  constructor(
    private authService: UserService,
    private stService: StorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSignIn() {
    /*
    this.authService.onCreateAccount().then((res: BusinessCreateAccount) => {
      this.stService.setCurrentSession(res);
      this.router.navigate(['/home']).then();
    });
    */
  }

}
