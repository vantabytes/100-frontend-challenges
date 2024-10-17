import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './core/components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent],
  template: `
    <app-navigation />
    <div class="app-wrapper">
      <router-outlet />
    </div>
  `,
  styles: `
    .app-wrapper {
      margin: 0 auto;
      width: 80vw;
      max-width: 1024px;
    }
  `,
})
export class AppComponent {}
