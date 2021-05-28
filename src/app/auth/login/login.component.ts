import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { groupBy } from 'rxjs/internal/operators/groupBy';
import { AlertMessageComponent } from 'src/app/alert-message/alert-message.component';
import { LayoutService } from 'src/app/layout.service';
import { BusinessAuthentication } from 'src/app/models/business/business-authentication';
import { UserService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/auth/storage-service';
import { AuthComponentService } from '../AuthComponentService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  constructor(
    public authCompService: AuthComponentService,
    private userService: UserService,
    fb: FormBuilder,
    private stService: StorageService,
    public router: Router,
    private layoutSevice: LayoutService,
    private dialog: MatDialog,
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
      this.router.navigate(['/']).then();
    }


  }
  onLogin() {
    if (this.formGroup.valid) {
      this.userService.onLogin(this.formGroup!.get("username")?.value, this.formGroup!.get("password")?.value).then((res) => {
        this.stService.setCurrentSession(res);
        this.layoutSevice.login();
        this.router.navigate(['/']).then();
      }).catch((res) => {
        let dialogRef = this.dialog.open(AlertMessageComponent, {
          width: '280px',
          data: { message: "Usuario o contraseña incorrecta", title: "Error" }
        });

      });
    }
    else {
      let dialogRef = this.dialog.open(AlertMessageComponent, {
        width: '280px',
        data: { message: "Formulario inválido", title: "Error" }
      });
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
