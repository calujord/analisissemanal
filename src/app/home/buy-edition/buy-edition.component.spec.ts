import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyEditionComponent } from './buy-edition.component';

describe('BuyEditionComponent', () => {
  let component: BuyEditionComponent;
  let fixture: ComponentFixture<BuyEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
