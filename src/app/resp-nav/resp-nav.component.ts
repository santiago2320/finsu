import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-resp-nav',
  templateUrl: './resp-nav.component.html',
  styleUrls: ['./resp-nav.component.css']
})
export class RespNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  isMobile() {
        return window.innerWidth < 750;
  }

}
