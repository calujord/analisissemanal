import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VirtualTimeScheduler } from 'rxjs';
import { Edition, EditionRead } from '../../models/home/home.model';
import { StorageService } from '../../services/auth/storage-service';
import { EditionService } from '../../services/edition-service/EditionServices';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-edition-preview',
  templateUrl: './edition-preview.component.html',
  styleUrls: ['./edition-preview.component.sass', './edition-preview.component.css']
})
export class EditionPreviewComponent implements OnInit {
  public editionRead: EditionRead;
  public createNewSubscription: boolean = false;
  public isLoadedPdf: boolean = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Edition,
    private editionService: EditionService,
    private stStorage: StorageService,
  ) {
    this.editionService.setSession(stStorage.getCurrentSession());
    this.editionService.getEdition(data).then((res) => this.editionRead = res);
  }
  reload() {

    this.editionService.setSession(this.stStorage.getCurrentSession());
    this.editionService.getEdition(this.data).then((res) => this.editionRead = res);
  }
  canReadEdition(): boolean {
    return this.editionRead.status_access == "CAN_READ";
  }
  ngOnInit(): void {

  }
  isAuthenticated(): boolean {
    return this.stStorage.isAuthenticated();
  }
  showSuscription() {
    this.createNewSubscription = true;
  }
  onFinishedPdfPreview(event) {
    this.isLoadedPdf = true;
  }
  showButtonWantToSubscribe() {
    return !this.createNewSubscription && this.editionRead && this.editionRead.status_access != 'CAN_READ';
  }
}
