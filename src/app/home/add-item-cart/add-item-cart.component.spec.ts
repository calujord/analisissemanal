import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemCartComponent } from './add-item-cart.component';

describe('AddItemCartComponent', () => {
  let component: AddItemCartComponent;
  let fixture: ComponentFixture<AddItemCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
