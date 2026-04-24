import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TicketService } from '../../services/ticket.service';
import { CategoryEnum, PriorityEnum } from '../../models/ticket';

@Component({
  selector: 'app-open-ticket',
  templateUrl: './open-ticket.component.html',
  styleUrls: ['./open-ticket.component.css']
})
export class OpenTicketComponent implements OnInit {

  customerName = '';

  form = {
    titulo: '',
    descricao: '',
    prioridade: '' as PriorityEnum | '',
    categoria: '' as CategoryEnum | '',
    agendamentoHabilitado: false,
    data: '',
    horario: ''
  };

  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.customerName = this.authService.getUser() ?? 'Cliente';
  }

  onSubmit(): void {
     console.log('=== SUBMIT CHAMADO ===');
  console.log('Token atual:', localStorage.getItem('auth_token'));
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.form.titulo || !this.form.descricao || !this.form.prioridade || !this.form.categoria) {
      this.errorMessage = 'Preencha todos os campos obrigatórios.';
      return;
    }

    if (this.form.agendamentoHabilitado && (!this.form.data || !this.form.horario)) {
      this.errorMessage = 'Informe a data e o horário do agendamento.';
      return;
    }

    this.isLoading = true;

    this.ticketService.createTicket({
      title: this.form.titulo,
      description: this.form.descricao,
      category: this.form.categoria as CategoryEnum,
      priority: this.form.prioridade as PriorityEnum
    }).subscribe({
      next: () => {
        this.isLoading = false;
        this.successMessage = 'Chamado aberto com sucesso! Redirecionando...';
        setTimeout(() => this.router.navigate(['/chamados']), 2000);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = this.handleError(err);
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/dashboard']);
  }

  private handleError(err: any): string {
    if (!err.status || err.status === 0) {
      return 'Não foi possível conectar ao servidor. Tente novamente.';
    }
    switch (err.status) {
      case 400: return err.error?.message || 'Dados inválidos. Verifique os campos.';
      case 403: return 'Você não tem permissão para abrir chamados.';
      case 500: return 'Erro interno no servidor. Tente mais tarde.';
      default:  return err.error?.message || 'Ocorreu um erro inesperado.';
    }
  }
}