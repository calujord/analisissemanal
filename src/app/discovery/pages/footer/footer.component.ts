import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { CategoryModel, EditionList, HomeModel } from 'src/app/models/home/home.model';
import { StorageService } from 'src/app/services/auth/storage-service';
import { EditionService } from 'src/app/services/edition-service/EditionServices';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    constructor(
    ) { }
    ngOnInit(): void {
    }

}