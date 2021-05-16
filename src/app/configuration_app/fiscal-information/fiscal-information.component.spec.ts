import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalInformationComponent } from './fiscal-information.component';

describe('FiscalInformationComponent', () => {
  let component: FiscalInformationComponent;
  let fixture: ComponentFixture<FiscalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiscalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiscalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
