import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  inject,
} from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoadingService } from '../../../services/loading.service';
import { AsyncPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from '@angular/router';

// https://blog.angular-university.io/angular-loading-indicator/

@Component({
  selector: 'loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.css'],
  imports: [MatProgressSpinnerModule, AsyncPipe, NgIf, NgTemplateOutlet],
  standalone: true,
})
export class LoadingIndicatorComponent implements OnInit {
  private loadingService: LoadingService = inject(LoadingService);
  private router: Router = inject(Router);

  loading$: Observable<boolean>;

  @Input()
  detectRouteTransitions = false;

  @ContentChild('loading')
  customLoadingTemplateRef: TemplateRef<any> | null = null;

  constructor() {
    this.loading$ = this.loadingService.loading$;
  }

  ngOnInit() {
    if (this.detectRouteTransitions) {
      this.router.events
        .pipe(
          tap((event) => {
            if (event instanceof RouteConfigLoadStart) {
              this.loadingService.loadingStart();
            } else if (event instanceof RouteConfigLoadEnd) {
              this.loadingService.loadingStop();
            }
          })
        )
        .subscribe();
    }
  }
}
