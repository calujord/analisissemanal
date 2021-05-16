import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionPreviewComponent } from './edition-preview.component';

describe('EditionPreviewComponent', () => {
  let component: EditionPreviewComponent;
  let fixture: ComponentFixture<EditionPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
