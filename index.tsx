
import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, Routes } from '@angular/router';
import { AppComponent } from './src/app.component';
import { HomeComponent } from './src/components/home.component';
import { BookEditorComponent } from './src/components/book-editor.component';
import { BookViewerComponent } from './src/components/book-viewer.component';
import { ProfileComponent } from './src/components/profile.component';
import { SubscriptionComponent } from './src/components/subscription.component';
import { LoginComponent } from './src/components/login.component';
import { AuthGuard } from './src/services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'book/edit/:id', component: BookEditorComponent, canActivate: [AuthGuard] },
  { path: 'book/view/:id', component: BookViewerComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'subscription', component: SubscriptionComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withHashLocation())
  ]
}).catch(err => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.
