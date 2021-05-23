import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendWhoareComponent } from './frontend-whoare.component';

describe('FrontendWhoareComponent', () => {
  let component: FrontendWhoareComponent;
  let fixture: ComponentFixture<FrontendWhoareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendWhoareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendWhoareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
