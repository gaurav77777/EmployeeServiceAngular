import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

// Define the auth guard function
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Inject AuthService
  const router = inject(Router); // Inject Router

  const token = authService.getToken();

  if (!token) {
    // If no token, redirect to login
    router.navigate(['/login']);
    return false;
  }
  
  return true; // Token exists, allow route activation
};
