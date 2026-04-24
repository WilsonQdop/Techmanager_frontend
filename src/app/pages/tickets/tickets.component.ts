import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { TicketSummaryResponseDTO  } from '../../models/ticket';
import { AuthService } from '../../services/auth.service';

interface TicketView {
  number: number;
  title: string;
  customerName: string;
  value: number;
  paymentConfirmed: boolean; 
  category: string;
  priority: string;
  technicalName?: string | null;
  status: string;
  createdAt: string;
}


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  tickets: TicketView[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private ticketService: TicketService,
    private authService: AuthService
  ) {}

  ngOnInit() {
  this.isLoading = true;

  if (this.authService.hasRole('CUSTOMER')) {
    this.ticketService.getMyTickets().subscribe({
      next: (data) => this.mapTickets(data),
      error: () => {
        this.errorMessage = 'Erro ao carregar seus chamados.';
        this.isLoading = false;
      }
    });
  } else {
    this.ticketService.getAllTickets().subscribe({
      next: (data) => this.mapTickets(data),
      error: () => {
        this.errorMessage = 'Erro ao carregar chamados.';
        this.isLoading = false;
      }
    });
  }
}

private mapTickets(data: TicketSummaryResponseDTO []) {
  const sorted = data.sort((a, b) => {
    if (a.priority === 'HIGH' && b.priority !== 'HIGH') return -1;
    if (b.priority === 'HIGH' && a.priority !== 'HIGH') return 1;
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  this.tickets = sorted.map((t, index) => ({
    number: index + 1,
    title: t.title,
    customerName: t.customerName,
    value: t.value ?? 0,
    paymentConfirmed: t.paymentConfirmed,
    category: t.category,
    priority: this.translatePriority(t.priority),
    technicalName: t.technicalName,
    status: this.translateStatus(t.status),
    createdAt: new Date(t.createdAt).toLocaleString()
  }));

  this.isLoading = false;
}

canSelfAssign(): boolean {
  return this.authService.hasRole('TECHNICAL');
}

canAssignOthers(): boolean {
  return this.authService.hasRole('ADMIN');
}


  assignToMe(ticket: TicketView) {
    alert(`Chamado ${ticket.number} atribuído a você!`);
    // Aqui você chamaria o backend para atualizar
  }

  assignTechnician(ticket: TicketView) {
    alert(`Chamado ${ticket.number} aguardando atribuição de técnico.`);
    // Aqui você chamaria o backend para atualizar
  }
  navigateToNewTicket(): void {
    this.router.navigate(['/abrir-chamado']);
  }

private translateStatus(status: string): string {
  switch (status) {
    case 'OPEN': return 'Aberto';
    case 'ASSIGNED': return 'Em Andamento';
    case 'CLOSED': return 'Finalizado';
    default: return status;
  }
}

private translatePriority(priority: string): string {
  switch (priority) {
    case 'HIGH': return 'Alta';
    case 'MEDIUM': return 'Média';
    case 'LOW': return 'Baixa';
    default: return priority;
  }
}
}
