import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendContactComponent } from './frontend-contact.component';

describe('FrontendContactComponent', () => {
  let component: FrontendContactComponent;
  let fixture: ComponentFixture<FrontendContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
