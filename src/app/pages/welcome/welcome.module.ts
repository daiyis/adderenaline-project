import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from '../../nz-zorro.module';
import { HeadshotComponent } from '../../components/headshot/headshot.component';
import { SubmissionCandidateDrawerComponent } from '../../components/submission-candidate-drawer/submission-candidate-drawer.component';
import { SubmissionDrawerComponent } from '../../components/submission-drawer/submission-drawer.component';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { SubmissionDashboardComponent } from '../../components/submission-dashboard/submission-dashboard.component';
import { DashboardHeaderComponent } from '../../components/dashboard-header/dashboard-header.component';
import { ResumeDetailComponent } from '../../components/resume-detail/resume-detail.component';
import { ZoomToggleComponent } from '../../components/zoom-toggle/zoom-toggle.component';
import { DocumentListComponent } from '../../components/document-list/document-list.component';
import { TalentDashboardComponent } from '../../components/talent-dashboard/talent-dashboard.component';
import { CandidateCardComponent } from '../../components/candidate-card/candidate-card.component';
import { SafeResourceUrlPipe } from '../../pipes';

@NgModule({
  imports: [WelcomeRoutingModule, NgZorroAntdModule, CommonModule, FormsModule],
  declarations: [
    WelcomeComponent,
    SubmissionDrawerComponent,
    SubmissionCandidateDrawerComponent,
    SubmissionDashboardComponent,
    DashboardHeaderComponent,
    HeadshotComponent,
    ResumeDetailComponent,
    ZoomToggleComponent,
    SafeResourceUrlPipe,
    DocumentListComponent,
    TalentDashboardComponent,
    CandidateCardComponent,
  ],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
