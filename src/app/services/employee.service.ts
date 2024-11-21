import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  /* private apiUrl = 'http://localhost:3000/employees'; // URL of the JSON Server API */
  private apiUrl = 'http://localhost:8081/api/employees';

  constructor(private http: HttpClient) {}

  // Get all employees
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  // Get a single employee by ID
  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

  // Add a new employee
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  // Update an existing employee
  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/${id}`, employee);
  }

  // Delete an employee
  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
