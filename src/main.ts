import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';

import { AppComponent } from './app/app.component';
import { EmployeeListComponent } from './app/components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './app/components/employee-form/employee-form.component';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';  



bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
});
