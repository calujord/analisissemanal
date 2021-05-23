import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { CategoryModel, EditionList } from 'src/app/models/home/home.model';
import { StorageService } from 'src/app/services/auth/storage-service';
import { EditionService } from 'src/app/services/edition-service/EditionServices';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  page: number = 1;
  categoryList: CategoryModel[] = [];
  date = new FormControl(moment());
  public edList: EditionList;
  formGroup!: FormGroup;
  constructor(
    fb: FormBuilder,
    private stService: StorageService,
    private editonServices: EditionService,

  ) {

    this.formGroup = new FormGroup({
      query: new FormControl('',),
      category: new FormControl('',),
      start: new FormControl(),
      end: new FormControl()
    });
    this.editonServices.getCategories().then((res) => {
      this.categoryList.push.apply(this.categoryList, res.object_list);
    })
  }
  ngOnInit(): void {

    this.editonServices.search(`${this.page}`, "", null, "").then((res) => {
      this.edList = res;
    });
  }
  searchEditions(): void {
    this.editonServices.search(`${this.page}`, this.formGroup.get("query").value, this.formGroup.get("category").value, this.getDateRange()).then((res) => {
      this.edList = res;
    });
  }

  getDateRange(): string {
    if (this.formGroup.get("start").value != null && this.formGroup.get("end").value != null)
      return `${moment(this.formGroup.get("start").value).format("yyyy-MM-DD")}|${moment(this.formGroup.get("end").value).format("yyyy-MM-DD")}`;
    else return null;
  }

}
