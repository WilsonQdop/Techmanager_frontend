import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-client',
  templateUrl: './dashboard-client.component.html',
  styleUrls: ['./dashboard-client.component.css']
})
export class DashboardClientComponent {
  stats = [
    { label: 'Chamados Abertos', value: '3', icon: 'assignment_late', iconBg: 'var(--color-error-container)', iconColor: 'var(--color-on-error-container)', trend: '+1 hoje', trendUp: true },
    { label: 'Em Andamento', value: '1', icon: 'engineering', iconBg: 'var(--color-secondary-fixed)', iconColor: 'var(--color-on-secondary-fixed-variant)', trend: '', trendUp: false },
    { label: 'Concluídos', value: '47', icon: 'task_alt', iconBg: 'var(--color-tertiary-fixed)', iconColor: 'var(--color-on-tertiary-fixed)', trend: '+5 este mês', trendUp: false },
    // { label: 'Satisfação Média', value: '4.8★', icon: 'star', iconBg: '#fef9c3', iconColor: '#a16207', trend: '', trendUp: false }
  ];

  recentTickets = [
    { id: '#1042', subject: 'Falha na impressora', technician: 'Carlos Mendes', status: 'Em Andamento', statusClass: 'badge-yellow', date: '23/04/2026' },
    { id: '#1038', subject: 'Configuração de e-mail', technician: 'Ana Paula', status: 'Finalizado', statusClass: 'badge-green', date: '20/04/2026' },
    { id: '#1031', subject: 'Lentidão no sistema', technician: 'Pedro Costa', status: 'Finalizado', statusClass: 'badge-green', date: '15/04/2026' },
    { id: '#1025', subject: 'Acesso VPN', technician: 'Carlos Mendes', status: 'Finalizado', statusClass: 'badge-green', date: '10/04/2026' }
  ];

  constructor(private router: Router) {}

  navigateToNewTicket() {
    this.router.navigate(['/abrir-chamado']);
  }
}
