import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditionPreviewComponent } from '../home/edition-preview/edition-preview.component';
import { Edition } from '../models/home/home.model';

@Component({
  selector: 'app-edition-card-item',
  templateUrl: './edition-card-item.component.html',
  styleUrls: [
    './edition-card-item.component.sass',
    './edition-card-item.component.css',
  ]
})
export class EditionCardItemComponent implements OnInit {
  @Input() edition: Edition;
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  showEdition(edition: Edition) {
    let dialogRef = this.dialog.open(EditionPreviewComponent, {
      height: '600px',
      width: '800px', data: edition
    });
  }

}
