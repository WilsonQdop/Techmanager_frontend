import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-technician',
  templateUrl: './dashboard-technician.component.html',
  styleUrls: ['./dashboard-technician.component.css']
})
export class DashboardTechnicianComponent {
  metrics = [
    {
      label: 'Chamados Abertos',
      value: '12',
      icon: 'assignment_late',
      iconBg: 'var(--color-error-container)',
      iconColor: 'var(--color-on-error-container)',
      trend: '▲ 2',
      trendIcon: 'arrow_upward',
      trendError: true
    },
    {
      label: 'Em Andamento',
      value: '5',
      icon: 'engineering',
      iconBg: 'var(--color-secondary-fixed)',
      iconColor: 'var(--color-on-secondary-fixed-variant)',
      trend: '',
      trendIcon: '',
      trendError: false
    },
    {
      label: 'Concluídos (Semana)',
      value: '28',
      icon: 'task_alt',
      iconBg: 'var(--color-primary-fixed)',
      iconColor: 'var(--color-on-primary-fixed-variant)',
      trend: '▼ 3',
      trendIcon: 'arrow_downward',
      trendError: false
    },
    {
      label: 'SLA Médio',
      value: '4h 30m',
      icon: 'timer',
      iconBg: 'var(--color-tertiary-fixed)',
      iconColor: 'var(--color-on-tertiary-fixed-variant)',
      trend: '',
      trendIcon: '',
      trendError: false
    }
  ];

  tickets = [
    { id: '#1042', client: 'TechCorp', problem: 'Falha de rede', status: 'Crítico', statusClass: 'badge-red', sla: '1h 20m', slaWarning: true },
    { id: '#1039', client: 'Indústria ABC', problem: 'Servidor fora', status: 'Em Andamento', statusClass: 'badge-yellow', sla: '3h 00m', slaWarning: false },
    { id: '#1035', client: 'Varejo XYZ', problem: 'Impressora', status: 'Aberto', statusClass: 'badge-blue', sla: '5h 45m', slaWarning: false },
    { id: '#1031', client: 'Banco Beta', problem: 'Atualização SW', status: 'Em Andamento', statusClass: 'badge-yellow', sla: '2h 10m', slaWarning: false }
  ];

  tasks = [
    { title: 'Verificar servidor de backup', client: 'TechCorp Solutions', priority: 'Alta', priorityClass: 'badge-red', done: false },
    { title: 'Instalar atualização de segurança', client: 'Indústria ABC', priority: 'Média', priorityClass: 'badge-yellow', done: false },
    { title: 'Relatório de manutenção preventiva', client: 'Varejo XYZ', priority: 'Baixa', priorityClass: 'badge-gray', done: true },
    { title: 'Configurar VPN para novo colaborador', client: 'Banco Beta', priority: 'Alta', priorityClass: 'badge-red', done: false }
  ];

  get pendingTasks() {
    return this.tasks.filter(t => !t.done).length;
  }

  constructor(private router: Router) {}

  navigateToNewTicket() {
    this.router.navigate(['/abrir-chamado']);
  }

  toggleTask(task: any) {
    task.done = !task.done;
  }
}
