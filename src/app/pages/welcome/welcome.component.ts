import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  submissionDrawerVisible = false;

  open(): void {
    this.submissionDrawerVisible = true;
  }

  closeDrawer($event: boolean): void {
    this.submissionDrawerVisible = $event;
  }
}
