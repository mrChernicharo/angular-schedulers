import { Component, OnInit } from '@angular/core';
import {
  Observable,
  interval,
  asyncScheduler,
  animationFrameScheduler,
  asapScheduler,
} from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-progress-bars',
  templateUrl: './progress-bars.component.html',
  styleUrls: ['./progress-bars.component.scss'],
})
export class ProgressBarsComponent implements OnInit {
  title = 'scheduler';
  progress$!: Observable<number>;
  progress2$!: Observable<number>;
  progress3$!: Observable<number>;
  progress4$!: Observable<number>;

  constructor() {}

  ngOnInit() {
    // interval emits 0,1,2,3,4...

    this.progress$ = interval(1000 / 60, asyncScheduler).pipe(
      map((v) => v * 0.1),
      take(1001)
    );
    this.progress2$ = interval(0, animationFrameScheduler).pipe(
      map((v) => v * 0.1),
      take(1001)
    );
    this.progress3$ = interval(1, asapScheduler).pipe(
      map((v) => v * 0.1),
      take(1001)
    );
    this.progress4$ = interval(0, asapScheduler).pipe(
      map((v) => v * 0.1),
      take(1001)
    );
  }
}
