import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { TicketDetailsResponseDTO, TicketSummaryResponseDTO  } from '../../models/ticket';
import { AuthService } from '../../services/auth.service';

interface TicketView {
  id: string;
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
onCancel() {
throw new Error('Method not implemented.');
}
onSave() {
throw new Error('Method not implemented.');
}
deleteTicket(arg0: string) {
throw new Error('Method not implemented.');
}
editTicket(arg0: string) {
throw new Error('Method not implemented.');
}
  tickets: TicketView[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private ticketService: TicketService,
    public authService: AuthService
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

selectedTicket?: TicketDetailsResponseDTO;
showDetails = false;

openDetails(ticketId: string) {
  this.ticketService.getTicketDetails(ticketId).subscribe(details => {
    this.selectedTicket = details;
    this.showDetails = true;
  });
}

closeDetails() { this.showDetails = false; }




private mapTickets(data: TicketSummaryResponseDTO []) {
  const sorted = data.sort((a, b) => {
    if (a.priority === 'HIGH' && b.priority !== 'HIGH') return -1;
    if (b.priority === 'HIGH' && a.priority !== 'HIGH') return 1;
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  this.tickets = sorted.map((t, index) => ({
    id: t.id,
    number: (1 + 1),
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


  assignTechnician(ticket: TicketView) {
  
    // Aqui você chamaria o backend para atualizar
  }
  assignToMe(ticket: TicketView) {
    console.log("Vai da o cu")
  // this.ticketService.assignTicket(ticketId).subscribe(() => {
  //   alert('Chamado atribuído com sucesso!');
  //   this.closeDetails();
  //   this.ngOnInit(); // recarrega lista
  // });
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
