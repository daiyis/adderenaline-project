import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Candidate } from '../../models';

@Component({
  selector: 'app-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandidateCardComponent implements OnInit {
  @Input() candidate: Candidate;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('Candidate', this.candidate);
  }
}
