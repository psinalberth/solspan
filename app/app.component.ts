import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styles: [`
    app-toolbar {
      background: var(--primary-color);
      color: var(--dark-theme-text-color);
    }

    app-toolbar.raised {
      @apply(--shadow-elevation-4dp);
    }

    paper-icon-button {
      position: absolute;
      top: 12px;
      left: 8px;
    }
  `]
})
export class AppComponent implements OnInit {
  title = '';
  isInChildView = false;
  private _routerSubscription: Subscription;

  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    this._routerSubscription = this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let route = this._route.snapshot;
        while (route.firstChild) {
          route = route.firstChild;
        }
        this.title = route.data['title'];
        this.isInChildView = !route.data['root'];
      }
    });
  }

  ngOnDestroy() {
    this._routerSubscription.unsubscribe();
  }

  goBack() {
    this._router.navigate(['/heroes']);
  }
}
