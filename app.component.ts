import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { StoreService } from './services/store.service';
import { AdService } from './services/ad.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  store = inject(StoreService);
  adService = inject(AdService);
  router = inject(Router);

  logout() {
    this.store.logout();
    this.router.navigate(['/login']);
  }
}