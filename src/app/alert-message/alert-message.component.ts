import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.sass']
})
export class AlertMessageComponent implements OnInit {
  public message: String;
  public title: String;
  constructor(
    @Inject(MAT_DIALOG_DATA) data,
  ) {
    this.message = data.message;
    this.title = data.title;

  }

  ngOnInit(): void {
  }

}
