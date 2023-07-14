import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeBriefComponent } from './office-brief.component';

describe('OfficeBriefComponent', () => {
  let component: OfficeBriefComponent;
  let fixture: ComponentFixture<OfficeBriefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficeBriefComponent]
    });
    fixture = TestBed.createComponent(OfficeBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
