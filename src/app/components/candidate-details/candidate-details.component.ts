import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from '../../models';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss'],
})
export class CandidateDetailsComponent implements OnInit {
  @Input() candidate: Candidate;

  constructor() {}

  ngOnInit(): void {}
}
