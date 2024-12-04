import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route, RouterModule } from '@angular/router';

import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';  



bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    RouterModule,
    provideRouter(routes)
  ]
});
