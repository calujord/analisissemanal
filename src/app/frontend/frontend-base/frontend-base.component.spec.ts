import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendBaseComponent } from './frontend-base.component';

describe('FrontendBaseComponent', () => {
  let component: FrontendBaseComponent;
  let fixture: ComponentFixture<FrontendBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
