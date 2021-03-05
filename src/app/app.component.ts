import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { CandidateService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  isCollapsed = false;
  searchChanged$ = new BehaviorSubject<string>('');
  protected destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private candidateService: CandidateService) {}

  ngOnInit() {
    this.initSearch();
  }

  private initSearch() {
    this.searchChanged$
      .pipe(takeUntil(this.destroyed$), debounceTime(250), distinctUntilChanged())
      .subscribe((query) => {
        this.candidateService.sendQueryMessage(query.trim());
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
