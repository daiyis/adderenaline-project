import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent implements OnInit {
  jobOrderId: number = 0;

  constructor(private candidateService: CandidateService) {}

  ngOnInit() {}

  submissionDrawerVisible = false;

  open($event: number): void {
    this.jobOrderId = $event;
    this.submissionDrawerVisible = true;
  }

  closeDrawer($event: boolean): void {
    this.submissionDrawerVisible = $event;
  }
}
