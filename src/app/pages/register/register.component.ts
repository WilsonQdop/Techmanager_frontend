import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nome = '';
  email = '';
  empresa = '';
  password = '';
  confirmPassword = '';
  showPassword = false;
  showConfirmPassword = false;
  acceptTerms = false;

  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onRegister(): void {
    this.errorMessage = '';
    this.successMessage = '';

    // Validações client-side
    if (!this.nome || !this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Preencha todos os campos obrigatórios.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'As senhas não coincidem.';
      return;
    }

    if (this.password.length < 8) {
      this.errorMessage = 'A senha deve ter no mínimo 8 caracteres.';
      return;
    }

    if (!this.acceptTerms) {
      this.errorMessage = 'Você precisa aceitar os Termos de Uso para continuar.';
      return;
    }

    this.isLoading = true;

    this.authService.register({
      name: this.nome,
      email: this.email,
      password: this.password,
      passwordConfirmed: this.confirmPassword
    }).subscribe({
      next: () => {
        this.isLoading = false;
        this.successMessage = 'Conta criada com sucesso! Redirecionando para o login...';
        setTimeout(() => this.router.navigate(['/login']), 2000);
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
      case 409:
        return 'Este e-mail já está em uso. Tente outro ou faça login.';
      case 400:
        return err.error?.message || 'Dados inválidos. Verifique os campos e tente novamente.';
      case 500:
        return 'Erro interno no servidor. Tente mais tarde.';
      default:
        return err.error?.message || 'Ocorreu um erro inesperado.';
    }
  }
}
