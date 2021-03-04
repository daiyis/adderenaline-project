import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateDetailsComponent } from '../../components/candidate-details/candidate-details.component';
import { CandidateComponent } from './candidate.component';

const routes: Routes = [
  { path: '', component: CandidateComponent },
  { path: ':id', component: CandidateDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateRoutingModule {}
