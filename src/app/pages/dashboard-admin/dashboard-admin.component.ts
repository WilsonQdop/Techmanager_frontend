import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {
  stats = [
    {
      label: 'Chamados Abertos',
      value: '24',
      icon: 'assignment_late',
      iconBg: 'var(--color-error-container)',
      iconColor: 'var(--color-on-error-container)',
      trend: '+3 hoje',
      trendIcon: 'trending_up',
      trendType: 'up'
    },
    {
      label: 'Em Andamento',
      value: '8',
      icon: 'engineering',
      iconBg: 'var(--color-secondary-fixed)',
      iconColor: 'var(--color-on-secondary-fixed-variant)',
      trend: '2 críticos',
      trendIcon: 'warning',
      trendType: 'up'
    },
    {
      label: 'Chamados Críticos',
      value: '42',
      icon: 'build',
      iconBg: '#fef9c3',
      iconColor: '#a16207',
      trend: '8 críticos',
      trendIcon: 'warning',
      trendType: 'up'
    },
    {
      label: 'Chamados Finalizados',
      value: '892',
      icon: 'task_alt',
      iconBg: 'var(--color-tertiary-fixed)',
      iconColor: 'var(--color-on-tertiary-fixed)',
      trend: '+24 hoje',
      trendIcon: 'trending_up',
      trendType: 'down'
    }
  ];

  recentUpdates = [
    {
      icon: 'check_circle',
      iconBg: '#dcfce7',
      iconColor: '#15803d',
      title: 'Manutenção Preventiva concluída',
      description: 'O técnico Carlos Mendes finalizou a manutenção no cliente <strong>TechCorp Solutions</strong>.',
      time: 'Hoje, 14:30',
      badge: 'Finalizado',
      badgeClass: 'badge-green'
    },
    {
      icon: 'pending_actions',
      iconBg: '#fef9c3',
      iconColor: '#a16207',
      title: 'Novo chamado crítico aberto',
      description: 'Falha de infraestrutura reportada pela <strong>Indústria ABC</strong>. Técnico despachado.',
      time: 'Hoje, 13:15',
      badge: 'Crítico',
      badgeClass: 'badge-red'
    },
    {
      icon: 'person_add',
      iconBg: '#dbeafe',
      iconColor: '#1d4ed8',
      title: 'Novo técnico integrado',
      description: 'Ana Paula juntou-se à equipe de rede da regional Sul.',
      time: 'Ontem, 09:00',
      badge: 'Equipe',
      badgeClass: 'badge-blue'
    }
  ];

  constructor(private router: Router) {}

  navigateToNewTicket() {
    this.router.navigate(['/abrir-chamado']);
  }
}
