import { Injectable } from '@angular/core';
import {Observable, interval} from 'rxjs';
import 'rxjs/add/observable/interval';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ClockServiceService {

  private clock: Observable<Date>;

  constructor() {
    this.clock = interval(1000).pipe(map(tick => new Date()));
  }

  getClock(): Observable<Date> {
    return this.clock;
  }
}
