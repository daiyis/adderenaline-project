import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Candidate } from '../../models';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidateDetailsComponent implements OnInit, OnDestroy {
  candidateId: number;
  candidate: Candidate;
  isFavorite: boolean = false;

  subscriptions: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private candidateService: CandidateService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.candidateId = +(params.get('id') || -1);
    });

    this.subscriptions.push(
      this.candidateService.getCandidateById(this.candidateId).subscribe((candidate) => {
        this.candidate = candidate;
        console.log('Candidate', this.candidate);
        this.cdRef.markForCheck();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe);
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
