import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponentsLoginComponent } from './app-components-login.component';

describe('AppComponentsLoginComponent', () => {
  let component: AppComponentsLoginComponent;
  let fixture: ComponentFixture<AppComponentsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponentsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponentsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
