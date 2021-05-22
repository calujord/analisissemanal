import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BusinessSubscriptionAddress } from 'src/app/models/business/business.models';
import { StorageService } from 'src/app/services/auth/storage-service';
import { BusinessService } from 'src/app/services/business/business-service';

@Component({
  selector: 'app-subscription-address-form',
  templateUrl: './subscription-address-form.component.html',
  styleUrls: ['./subscription-address-form.component.sass']
})
export class SubscriptionAddressFormComponent implements OnInit {

  businessProfileForm!: FormGroup;

  constructor(
    fb: FormBuilder,
    private storage: StorageService,
    public dialogRef: MatDialogRef<SubscriptionAddressFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BusinessSubscriptionAddress,
    private businessService: BusinessService,
  ) { }

  ngOnInit(): void {
    this.businessProfileForm = new FormGroup({
      name: new FormControl(this.data.name, [Validators.required]),
      full_address: new FormControl(this.data.full_address, [Validators.required]),
      phone: new FormControl(this.data.phone, [Validators.required]),
      city: new FormControl(this.data.city, [Validators.required]),
    });
  }
  saveBusiness() {
    this.data.name = this.businessProfileForm.get("name").value;
    this.data.full_address = this.businessProfileForm.get("full_address").value;
    this.data.phone = this.businessProfileForm.get("phone").value;
    this.data.city = this.businessProfileForm.get("city").value;
    this.businessService.setToken(this.storage.getCurrentToken());
    this.businessService.updateAddress(this.data).then((res) => {
      this.dialogRef.close();
    });
  }
}
