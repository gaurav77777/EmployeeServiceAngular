import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/v1/auth/login'; // Your Spring Boot auth endpoint


  constructor(private http: HttpClient) {}




  





  /*login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(this.apiUrl, body).pipe(
      tap((response: { token: string; }) => {
        if (response.token) {
          this.setToken(response.token);  // Store token on successful login
        }
      })
    );
  }*/


  
    
    login(username: string, password: string): Observable<any> {
      //const params = new HttpParams()
      //  .set('username', username)  // Add username as a query parameter
      //  .set('password', password); // Add password as a query parameter

      const body = { username, password }; // send plain JSON
  
      return this.http.post<any>(this.apiUrl, body , { responseType: 'text' as 'json' }).pipe(
        tap((response: string ) => {
          console.log('JWT Token received:', response); // 👈 print token
          if (response) {
            this.setToken(response);  // Save token in localStorage on successful login
          }
        })
      );
    }
     
  
  


  setToken(token: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('token', token);
    }
  }
  
  getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('token');
    }
    return null; // Return null if localStorage is not available
  }
  



 
 
  logout(): void {
    //localStorage.removeItem('authToken');  // Remove JWT token on logout
    localStorage.removeItem('token');  // Remove JWT token on logout
    
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  
  
}
