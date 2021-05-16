import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionReadComponent } from './edition-read.component';

describe('EditionReadComponent', () => {
  let component: EditionReadComponent;
  let fixture: ComponentFixture<EditionReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
