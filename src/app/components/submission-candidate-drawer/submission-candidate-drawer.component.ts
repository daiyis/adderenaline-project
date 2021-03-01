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
import { Candidate } from '../../models';
import { SubmissionService } from '../../services';

@Component({
  selector: 'app-submission-candidate-drawer',
  templateUrl: './submission-candidate-drawer.component.html',
  styleUrls: ['./submission-candidate-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmissionCandidateDrawerComponent implements OnInit {
  @Input() submissionId: number;
  @Input() candidateId: number;

  @Output() visibleChange = new EventEmitter<boolean>();

  visible: boolean = false;
  candidate: Candidate;

  subscriptions: Subscription[] = [];

  constructor(
    private submissionService: SubmissionService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.submissionService
        .getCandidateBasedOnSubmission(this.submissionId, this.candidateId)
        .subscribe((candidate) => {
          this.candidate = candidate;
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
}
