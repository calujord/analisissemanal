import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsManageComponent } from './settings-manage.component';

describe('SettingsManageComponent', () => {
  let component: SettingsManageComponent;
  let fixture: ComponentFixture<SettingsManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
