import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'src/app/nz-zorro.module';
import { HeadshotComponent } from '../../components/headshot/headshot.component';
import { SubmissionCandidateDrawerComponent } from '../../components/submission-candidate-drawer/submission-candidate-drawer.component';
import { SubmissionDrawerComponent } from '../../components/submission-drawer/submission-drawer.component';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [WelcomeRoutingModule, NgZorroAntdModule, CommonModule, FormsModule],
  declarations: [
    WelcomeComponent,
    SubmissionDrawerComponent,
    SubmissionCandidateDrawerComponent,
    HeadshotComponent,
  ],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
