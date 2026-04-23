import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  profile = {
    nome: 'João Silva',
    email: 'joao.silva@empresa.com.br',
    telefone: '(11) 99999-0000',
    cargo: 'Administrador'
  };

  security = {
    senhaAtual: '',
    novaSenha: '',
    confirmarSenha: ''
  };

  selectedTheme = 'light';

  notifications = {
    email: true,
    push: false
  };

  constructor(private router: Router) {}

  onSave() {
    alert('Configurações salvas com sucesso!');
  }

  onCancel() {
    this.router.navigate(['/dashboard']);
  }
}
