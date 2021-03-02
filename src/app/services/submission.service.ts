import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Candidate, Submission } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SubmissionService {
  constructor(private http: HttpClient) {}

  submissionsUrl = 'assets/data/submission-data.json';

  getSubmissionByJobId(jobOrderId: number): Observable<Submission> {
    return this.http.get<Submission[]>(this.submissionsUrl).pipe(
      map((submissions: Submission[]) => {
        return submissions.filter((x) => x.jobOrderId === jobOrderId)[0];
      })
    );
  }

  getCandidateBasedOnJob(jobOrderId: number, candidateId: number): Observable<Candidate> {
    return this.http.get<Submission[]>(this.submissionsUrl).pipe(
      map((submissions: Submission[]) => {
        return submissions
          .filter((x) => x.jobOrderId === jobOrderId)[0]
          .candidates.filter((x) => x.candidateId === candidateId)[0];
      })
    );
  }
}
