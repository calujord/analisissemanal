import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { groupBy } from 'rxjs/internal/operators/groupBy';
import { LayoutService } from 'src/app/layout.service';
import { BusinessAuthentication } from 'src/app/models/business/business-authentication';
import { UserService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/auth/storage-service';
import { AuthComponentService } from '../AuthComponentService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  constructor(
    public authCompService: AuthComponentService,
    private userService: UserService,
    fb: FormBuilder,
    private stService: StorageService,
    public router: Router,
    private layoutSevice: LayoutService
  ) {
  }
  ngOnInit(): void {
    this.layoutSevice.hideSideBar();
    this.layoutSevice.hideNavBar();
    this.formGroup = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      username: new FormControl('', [Validators.required, Validators.email]),
      chkremember: new FormControl('')
    })
    if (this.stService.getCurrentSession() != null) {
      this.router.navigate(['/home']).then();
    }


  }
  onLogin() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.get("username")?.value, "====> ");
      this.userService.onLogin(this.formGroup!.get("username")?.value, this.formGroup!.get("password")?.value).then((res) => {
        this.stService.setCurrentSession(res);
        this.layoutSevice.login();
        this.router.navigate(['/home']).then();
      }).catch((res) => {

      });
    }
    else {
      alert("Error ");
    }

  }

  _onLoginResponse(businessAuth: BusinessAuthentication) {
  }
  _onCatchError(message: string) {
    // let dialogRef = dialog.open(UserProfileComponent, {
    //   height: '400px',
    //   width: '600px',
    // });
  }

  // 
}
