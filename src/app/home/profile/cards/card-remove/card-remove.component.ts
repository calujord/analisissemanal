import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-card-remove',
  templateUrl: './card-remove.component.html',
  styleUrls: ['./card-remove.component.sass']
})
export class CardRemoveComponent implements OnInit {
  breakpoint = 3;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { name: string }) { }

  ngOnInit(): void {

  }

}
