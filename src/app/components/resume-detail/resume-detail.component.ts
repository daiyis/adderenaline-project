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
import { Observable, Subject, Subscription } from 'rxjs';
import { CandidateAttachmentType } from '../../enums/candidate-attachment-type';
import { Candidate } from '../../models';

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
  mode: 'original' | 'formatted' = 'original';
  // iframeLoaded: boolean;

  resumeViewUrl: string;
  formattedResumeViewUrl: string;

  resumeZoom = 100; // %
  formattedResumeZoom = 100;

  resumeZoomChange = new Subject();
  enlargeForPushing: number = 1.1;
  subscriptions: Subscription[] = [];

  get updateSettingsModel(): any {
    return [
      {
        type: CandidateAttachmentType.Resume,
        zoom: this.resumeZoom,
      },
      {
        type: CandidateAttachmentType.FormattedResume,
        zoom: this.formattedResumeZoom,
      },
    ];
  }

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.mode = 'original';
    this.cdRef.markForCheck();

    if (this.fullView) {
      this.resumeZoom = this.formattedResumeZoom = 60;
    }

    this.resumeViewUrl = this.candidate.resumeUri;
    this.formattedResumeViewUrl = this.candidate.resumeUri;

    this.cdRef.markForCheck();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initResumeUrl();

    this.cdRef.markForCheck();
  }

  modeChange(value: string) {
    console.log('Mode change');
  }

  onIframeLoad(evt: any) {
    if (evt.target.src) {
      // this.iframeLoaded = true;
      this.cdRef.markForCheck();
    }
  }

  ngOnDestroy() {
    this.resumeZoomChange.complete();
    this.subscriptions.forEach((s) => s.unsubscribe);
  }

  initResumeUrl() {
    if (!this.candidate.resumeUri && this.mode === 'original') {
      this.mode = 'formatted';
    } else if (this.candidate.resumeUri && this.mode === 'formatted') {
      this.mode = 'original';
    }
  }

  onResumeZoom(zoom: number, isFormatted: boolean = false) {
    if (isFormatted) {
      this.formattedResumeZoom = zoom;
    } else {
      this.resumeZoom = zoom;
    }
    this.cdRef.markForCheck();
    this.resumeZoomChange.next();
  }
}
