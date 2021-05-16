import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionCardItemComponent } from './edition-card-item.component';

describe('EditionCardItemComponent', () => {
  let component: EditionCardItemComponent;
  let fixture: ComponentFixture<EditionCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionCardItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
