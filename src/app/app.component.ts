import { Component, OnInit } from '@angular/core';
import {
  animationFrameScheduler,
  asapScheduler,
  asyncScheduler,
  interval,
  Observable,
  queueScheduler,
} from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {}
}
