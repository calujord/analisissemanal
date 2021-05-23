import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/auth/auth.service';
import { AuthComponentService } from '../AuthComponentService';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.sass']
})
export class AuthenticationComponent implements OnInit {

  constructor(public authCompService: AuthComponentService) {

  }

  ngOnInit(): void {
  }
}
