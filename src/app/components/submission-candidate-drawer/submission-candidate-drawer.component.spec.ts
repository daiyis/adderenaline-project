import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionCandidateDrawerComponent } from './submission-candidate-drawer.component';

describe('SubmissionCandidateDrawerComponent', () => {
  let component: SubmissionCandidateDrawerComponent;
  let fixture: ComponentFixture<SubmissionCandidateDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionCandidateDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionCandidateDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
