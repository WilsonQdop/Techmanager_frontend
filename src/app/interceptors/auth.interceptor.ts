import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();

  console.log('=== INTERCEPTOR === URL:', request.url, '| Token:', token);
  console.log('=== INTERCEPTOR ===');
  console.log('URL:', request.url);
  console.log('Token encontrado:', token);
  
  const isPublicRoute = request.url.includes('/auth/login') || request.url.includes('/auth/register');
  console.log('É rota pública?', isPublicRoute);
  
  const authRequest = token && !isPublicRoute
    ? request.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : request;
    return next.handle(authRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        // Token expirado ou inválido: logout automático
        if (error.status === 401 && !isPublicRoute) {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}
