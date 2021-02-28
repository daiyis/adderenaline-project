import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Candidate, ColumnItem, Submission } from '../../models';
import { SubmissionService } from '../../services/submission.service';

@Component({
  selector: 'app-submission-drawer',
  templateUrl: './submission-drawer.component.html',
  styleUrls: ['./submission-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmissionDrawerComponent implements OnInit {
  @Input() submissionId: number;
  @Output() visibleChange = new EventEmitter<boolean>();

  submissionCandidateDrawerVisible: boolean = false;
  submission: Submission;
  selectedCandidateId: number;

  subscriptions: Subscription[] = [];

  listOfColumns: ColumnItem[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFn: (a: Candidate, b: Candidate) => a.name.localeCompare(b.name),
    },
    {
      name: 'Date submitted',
    },
    {
      name: 'Rating',
      sortOrder: 'descend',
      sortFn: (a: Candidate, b: Candidate) => a.rating - b.rating,
      sortDirections: ['descend', null],
    },
  ];

  constructor(
    private submissionService: SubmissionService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.submissionService
        .getSubmissionById(this.submissionId)
        .subscribe((submission) => {
          this.submission = submission;
          this.cdRef.markForCheck();
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe);
  }

  closeSelf() {
    this.visibleChange.emit(false);
  }

  closeDrawer($event: boolean): void {
    this.submissionCandidateDrawerVisible = $event;
  }

  showCandidateDrawer(candidateId: number) {
    if (this.selectedCandidateId) this.closeDrawer(false);
    this.selectedCandidateId = candidateId;
    this.submissionCandidateDrawerVisible = true;
  }
}
