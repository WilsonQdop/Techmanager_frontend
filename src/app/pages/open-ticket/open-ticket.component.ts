import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-ticket',
  templateUrl: './open-ticket.component.html',
  styleUrls: ['./open-ticket.component.css']
})
export class OpenTicketComponent {
  form = {
    cliente: '',
    prioridade: '',
    categoria: '',
    tecnico: '',
    titulo: '',
    descricao: '',
    data: '',
    horario: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/chamados']);
  }

  onCancel() {
    this.router.navigate(['/dashboard']);
  }
}
