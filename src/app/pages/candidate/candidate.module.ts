import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'src/app/nz-zorro.module';
import { CandidateDetailsComponent } from '../../components/candidate-details/candidate-details.component';
import { SharedModule } from '../../shared/shared.module';

import { CandidateRoutingModule } from './candidate-routing.module';

import { CandidateComponent } from './candidate.component';

@NgModule({
  imports: [CandidateRoutingModule, NgZorroAntdModule, CommonModule, FormsModule, SharedModule],
  declarations: [CandidateComponent, CandidateDetailsComponent],
  exports: [CandidateComponent],
})
export class CandidateModule {}
