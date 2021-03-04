import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
  SimpleChanges,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { CandidateAttachmentType } from '../../../enums/candidate-attachment-type';
import { Candidate } from '../../../models';

@Component({
  selector: 'app-resume-detail',
  templateUrl: './resume-detail.component.html',
  styleUrls: ['./resume-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeDetailComponent implements OnInit, OnChanges, OnDestroy {
  @Input() candidate: Candidate;
  @Input() fullView: boolean;

  AttachmentType = CandidateAttachmentType;

  resumeViewUrl: string;

  resumeZoom = 100; // %

  resumeZoomChange = new Subject();
  enlargeForPushing: number = 1.1;
  subscriptions: Subscription[] = [];
  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.cdRef.markForCheck();

    if (this.fullView) {
      this.resumeZoom = 60;
    }

    console.log('Resume', this.candidate.resumeUri);

    this.resumeViewUrl = this.candidate.resumeUri;

    this.cdRef.markForCheck();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cdRef.markForCheck();
  }

  modeChange(value: string) {
    console.log('Mode change');
  }

  onIframeLoad(evt: any) {
    if (evt.target.src) {
      this.cdRef.markForCheck();
    }
  }

  ngOnDestroy() {
    this.resumeZoomChange.complete();
    this.subscriptions.forEach((s) => s.unsubscribe);
  }

  onResumeZoom(zoom: number) {
    this.resumeZoom = zoom;

    this.cdRef.markForCheck();
    this.resumeZoomChange.next();
  }
}
