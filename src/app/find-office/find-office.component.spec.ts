import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOfficeComponent } from './find-office.component';

describe('FindOfficeComponent', () => {
  let component: FindOfficeComponent;
  let fixture: ComponentFixture<FindOfficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindOfficeComponent]
    });
    fixture = TestBed.createComponent(FindOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
