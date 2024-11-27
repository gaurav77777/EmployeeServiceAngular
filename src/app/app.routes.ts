import { Route, Routes } from '@angular/router';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormReactiveComponent } from './components/employee-form-reactive/employee-form-reactive.component';



  /* export const routes: Route[] = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee-form', component: EmployeeFormComponent },
  { path: 'employee-form/:id', component: EmployeeFormComponent }
]; */

export const routes: Route[] = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee-form', component: EmployeeFormReactiveComponent },
  { path: 'employee-form/:id', component: EmployeeFormReactiveComponent }
];

 
