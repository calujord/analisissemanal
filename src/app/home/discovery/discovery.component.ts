import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { StorageService } from 'src/app/services/auth/storage-service';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.sass']
})
export class DiscoveryComponent implements OnInit {
  categoryList = [];
  date = new FormControl(moment());

  formGroup!: FormGroup;
  constructor(
    fb: FormBuilder,
    private stService: StorageService,
  ) {

    this.formGroup = new FormGroup({
      query: new FormControl('',),
      category: new FormControl('',),
      start: new FormControl(),
      end: new FormControl()
    })
  }

  ngOnInit(): void {
  }

}
