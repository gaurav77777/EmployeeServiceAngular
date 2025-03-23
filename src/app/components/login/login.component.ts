import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Corrected this to styleUrls (plural)
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        this.router.navigate(['']);  // Redirect to another page on successful login
      },
      error: (error) => {
        this.errorMessage = 'Invalid credentials';  // Handle error (wrong credentials, etc.)
      },
      complete: () => {
        console.log('Login attempt complete');
      }
    });
  }
}
