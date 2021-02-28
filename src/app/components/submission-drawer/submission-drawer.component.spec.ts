import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionDrawerComponent } from './submission-drawer.component';

describe('SubmissionDrawerComponent', () => {
  let component: SubmissionDrawerComponent;
  let fixture: ComponentFixture<SubmissionDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
