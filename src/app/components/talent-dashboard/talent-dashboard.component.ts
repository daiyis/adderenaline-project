import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Candidate } from '../../models';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-talent-dashboard',
  templateUrl: './talent-dashboard.component.html',
  styleUrls: ['./talent-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TalentDashboardComponent implements OnInit {
  candidates: Candidate[];
  tempCandidates: Candidate[];
  subscriptions: Subscription[] = [];

  constructor(private candidateService: CandidateService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.candidateService.getCandidates().subscribe((candidates) => {
        this.candidates = candidates;
        this.tempCandidates = [...candidates];
        this.cdRef.markForCheck();
        this.candidateService.buildSearchIndex(candidates);
      })
    );
    this.subscriptions.push(
      this.candidateService.getQueryMessage().subscribe(({ text }) => {
        if (text) {
          this.candidateService.searchLocal(text).subscribe((candidates) => {
            this.candidates = candidates;
          });
        } else {
          this.candidates = this.tempCandidates;
        }
        this.cdRef.markForCheck();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe);
  }
}
