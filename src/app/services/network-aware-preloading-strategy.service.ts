import {Injectable} from '@angular/core';
import {PreloadingStrategy, Route} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkAwarePreloadingStrategyService implements PreloadingStrategy {

  constructor() {
  }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    //only works in chrome
    const connection = navigator['connection']
        || navigator['mozConnection'] 
        || navigator['webkitConnection'];
    if (connection['saveData']) {
      return of(null);
    }
    const speed = connection['effectiveType'];
    const slowConnections = ['slow-2g', '2g'];
    if (slowConnections.includes(speed)) {
      return of(null);
    }
    return fn();
  }
}
