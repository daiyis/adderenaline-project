import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Candidate } from '../models';

import * as JsSearch from 'js-search';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  private searchEngine: JsSearch;

  private subject = new Subject<any>();

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

  searchLocal(query: string): Observable<Candidate[]> {
    if (this.searchEngine) {
      return of(this.searchEngine.search(query) as Candidate[]);
    }
    return this.getCandidates();
  }

  buildSearchIndex(Candidates: Candidate[]): void {
    this.searchEngine = new JsSearch.Search('talents');
    this.searchEngine.addIndex('fullName');
    this.searchEngine.addIndex('position');
    this.searchEngine.addDocuments(Candidates);
  }

  sendQueryMessage(query: string) {
    this.subject.next({ text: query });
  }

  clearQueryMessages() {
    this.subject.next();
  }

  getQueryMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
