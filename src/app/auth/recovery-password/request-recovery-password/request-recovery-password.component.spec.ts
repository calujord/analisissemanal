import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRecoveryPasswordComponent } from './request-recovery-password.component';

describe('RequestRecoveryPasswordComponent', () => {
  let component: RequestRecoveryPasswordComponent;
  let fixture: ComponentFixture<RequestRecoveryPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestRecoveryPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRecoveryPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
