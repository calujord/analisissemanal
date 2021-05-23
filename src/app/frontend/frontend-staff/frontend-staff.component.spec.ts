import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendStaffComponent } from './frontend-staff.component';

describe('FrontendStaffComponent', () => {
  let component: FrontendStaffComponent;
  let fixture: ComponentFixture<FrontendStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
