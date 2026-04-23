import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Ticket {
  id: string;
  client: string;
  subject: string;
  technician: string;
  category: string;
  priority: string;
  priorityClass: string;
  status: string;
  statusClass: string;
  date: string;
}

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  searchTerm = '';
  statusFilter = '';
  categoryFilter = '';

  allTickets: Ticket[] = [
    { id: '#1042', client: 'TechCorp Solutions', subject: 'Falha de rede no setor 3', technician: 'Carlos Mendes', category: 'Redes', priority: 'Crítica', priorityClass: 'badge-red', status: 'Crítico', statusClass: 'badge-red', date: '23/04/2026' },
    { id: '#1041', client: 'Indústria ABC', subject: 'Servidor fora do ar', technician: 'Ana Paula', category: 'Infraestrutura', priority: 'Alta', priorityClass: 'badge-red', status: 'Em Andamento', statusClass: 'badge-yellow', date: '22/04/2026' },
    { id: '#1040', client: 'Varejo XYZ', subject: 'Impressora sem comunicação', technician: 'Pedro Costa', category: 'Hardware', priority: 'Média', priorityClass: 'badge-yellow', status: 'Aberto', statusClass: 'badge-blue', date: '22/04/2026' },
    { id: '#1039', client: 'Banco Beta', subject: 'Atualização de software', technician: 'Carlos Mendes', category: 'Software', priority: 'Baixa', priorityClass: 'badge-gray', status: 'Em Andamento', statusClass: 'badge-yellow', date: '21/04/2026' },
    { id: '#1038', client: 'TechCorp Solutions', subject: 'Configuração de e-mail', technician: 'Ana Paula', category: 'Software', priority: 'Baixa', priorityClass: 'badge-gray', status: 'Finalizado', statusClass: 'badge-green', date: '20/04/2026' },
    { id: '#1037', client: 'Indústria ABC', subject: 'Troca de HD servidor', technician: 'Pedro Costa', category: 'Hardware', priority: 'Alta', priorityClass: 'badge-red', status: 'Finalizado', statusClass: 'badge-green', date: '19/04/2026' },
    { id: '#1036', client: 'Varejo XYZ', subject: 'Lentidão na rede Wi-Fi', technician: 'Carlos Mendes', category: 'Redes', priority: 'Média', priorityClass: 'badge-yellow', status: 'Aberto', statusClass: 'badge-blue', date: '18/04/2026' },
    { id: '#1035', client: 'Banco Beta', subject: 'Acesso VPN colaborador', technician: 'Ana Paula', category: 'Redes', priority: 'Média', priorityClass: 'badge-yellow', status: 'Finalizado', statusClass: 'badge-green', date: '17/04/2026' }
  ];

  filteredTickets: Ticket[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.filteredTickets = [...this.allTickets];
  }

  filterTickets() {
    this.filteredTickets = this.allTickets.filter(t => {
      const matchSearch = !this.searchTerm ||
        t.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        t.client.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        t.subject.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        t.technician.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchStatus = !this.statusFilter || t.status === this.statusFilter;
      const matchCategory = !this.categoryFilter || t.category === this.categoryFilter;

      return matchSearch && matchStatus && matchCategory;
    });
  }

  deleteTicket(ticket: Ticket) {
    if (confirm(`Deseja excluir o chamado ${ticket.id}?`)) {
      this.allTickets = this.allTickets.filter(t => t.id !== ticket.id);
      this.filterTickets();
    }
  }

  navigateToNewTicket() {
    this.router.navigate(['/abrir-chamado']);
  }
}
