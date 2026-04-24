import { Component, NgModule } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  showPassword = false;

  isLoading = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin(): void {
    
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Preencha todos os campos.';
      return;
    }

    this.isLoading = true;

    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = this.handleError(err);
      }

      

    });
  }

  private handleError(err: any): string {
    if (!err.status || err.status === 0) {
      return 'Não foi possível conectar ao servidor. Tente novamente.';
    }
    switch (err.status) {
      case 401:
      case 403:
        return 'Email ou senha inválidos.';
      case 404:
        return 'Usuário não encontrado.';
      case 500:
        return 'Erro interno no servidor. Tente mais tarde.';
      default:
        return err.error?.message || 'Ocorreu um erro inesperado.';
    }
  }
}
