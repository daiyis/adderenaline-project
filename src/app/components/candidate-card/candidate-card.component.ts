import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from '../../models';

@Component({
  selector: 'app-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidateCardComponent implements OnInit {
  @Input() candidate: Candidate;

  isFavorite: boolean = false;
  engageButtonText: string = 'Engage';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  engageCandidate() {
    this.engageButtonText = 'Engaged';
  }

  openCandidateDetails() {
    this.router.navigate(['candidate', this.candidate.id]);
  }
}
