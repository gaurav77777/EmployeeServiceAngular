import { Route, Routes } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormReactiveComponent } from './components/employee-form-reactive/employee-form-reactive.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';



  /* export const routes: Route[] = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee-form', component: EmployeeFormComponent },
  { path: 'employee-form/:id', component: EmployeeFormComponent }
]; */

export const routes: Route[] = [
  { path: '', component: HomeComponent , canActivate: [authGuard] },  // Default route
  { path: 'login', component: LoginComponent },  // Login route (no guard)
  { path: 'employees', component: EmployeeListComponent , canActivate: [authGuard]},
  { path: 'employee-form', component: EmployeeFormReactiveComponent , canActivate: [authGuard]},
  { path: 'employee-form/:id', component: EmployeeFormReactiveComponent , canActivate: [authGuard]}
];

 
