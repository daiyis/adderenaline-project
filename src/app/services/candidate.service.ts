import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Candidate } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  constructor(private http: HttpClient) {}

  candidatesUrl = 'https://7dnkp8jtg4.execute-api.ap-southeast-2.amazonaws.com/BMDq6hkc6ku1xmkqekSZA';

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.candidatesUrl);
  }

  getCandidateById(candidateId: number): Observable<Candidate> {
    return this.http.get<Candidate[]>(this.candidatesUrl).pipe(
      map((submissions: Candidate[]) => {
        return submissions.filter((x) => x.id === candidateId)[0];
      })
    );
  }
}
