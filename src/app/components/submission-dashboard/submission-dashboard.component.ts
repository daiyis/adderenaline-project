import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JobOrder } from 'src/app/models';

@Component({
  selector: 'app-submission-dashboard',
  templateUrl: './submission-dashboard.component.html',
  styleUrls: ['./submission-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmissionDashboardComponent implements OnInit {
  @Output() openLink = new EventEmitter();

  listOfJobs: JobOrder[] = [
    {
      jobOrderID: 1,
      jobTitle: 'Project Manager',
      daysOpen: 32,
      totalCandidates: 30,
      submitted: 0,
      interviews: 0,
    },
    {
      jobOrderID: 2,
      jobTitle: 'Business Analyst',
      daysOpen: 23,
      totalCandidates: 18,
      submitted: 6,
      interviews: 0,
    },
    {
      jobOrderID: 3,
      jobTitle: 'Product Manager',
      daysOpen: 2,
      totalCandidates: 5,
      submitted: 2,
      interviews: 1,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  openSubmission(jobOrderID: number): void {
    this.openLink.emit(jobOrderID);
  }
}
