import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-technician',
  templateUrl: './register-technician.component.html',
  styleUrls: ['./register-technician.component.css']
})
export class RegisterTechnicianComponent {
  form = {
    nome: '',
    email: '',
    telefone: '',
    especialidade: '',
    regional: '',
    senha: ''
  };
  showPassword = false;

  constructor(private router: Router) {}

  togglePassword() { this.showPassword = !this.showPassword; }

  onSave() {
    this.router.navigate(['/tecnicos']);
  }

  onCancel() {
    this.router.navigate(['/dashboard']);
  }
}
