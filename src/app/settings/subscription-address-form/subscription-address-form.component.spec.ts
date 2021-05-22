import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionAddressFormComponent } from './subscription-address-form.component';

describe('SubscriptionAddressFormComponent', () => {
  let component: SubscriptionAddressFormComponent;
  let fixture: ComponentFixture<SubscriptionAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionAddressFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
