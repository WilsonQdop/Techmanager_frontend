import { Component, OnInit } from '@angular/core';

interface ActivityItem {
  time: string;
  title: string;
  description: string;
  author: string;
  isLatest: boolean;
}

@Component({
  selector: 'app-history-form',
  templateUrl: './history-form.component.html',
  styleUrls: ['./history-form.component.css'],
 
})
export class HistoryFormComponent implements OnInit {
  registryId = '550e8400-e29b-41d4-a716-446655440000';
  changeDate = '2023-11-20T14:30';
  selectedTicket = 'TK-915: Atualização de Firmware Firewall Central';
  newStatus = 'Em Progresso';
  updatedBy = 'Alexandre Souza';
  interventionDetails = '';

  tickets = [
    'TK-915: Atualização de Firmware Firewall Central',
    'TK-882: Falha Crítica no Servidor de Produção',
    'TK-901: Migração de Banco de Dados'
  ];

  statuses = [
    'Em Progresso',
    'Aberto',
    'Aguardando Terceiros',
    'Resolvido'
  ];

  statusGuide = [
    { label: 'Em Progresso', desc: 'Intervenção técnica ativa em execução.', color: 'bg-blue-400' },
    { label: 'Aguardando', desc: 'Dependência externa ou de hardware/peças.', color: 'bg-amber-400' },
    { label: 'Resolvido', desc: 'Causa raiz sanada, aguardando validação.', color: 'bg-emerald-400' }
  ];

  activities: ActivityItem[] = [
    {
      time: 'Hoje, 10:15',
      title: 'Alterado para Aberto',
      description: '"Triagem inicial concluída."',
      author: '',
      isLatest: true
    },
    {
      time: 'Ontem, 16:40',
      title: 'Registro Criado',
      description: 'Sistema Automático',
      author: '',
      isLatest: false
    }
  ];

  ngOnInit() {
    // Inicialização se necessário
  }

  onSaveHistory() {
    console.log('Salvando histórico:', {
      registryId: this.registryId,
      changeDate: this.changeDate,
      selectedTicket: this.selectedTicket,
      newStatus: this.newStatus,
      updatedBy: this.updatedBy,
      interventionDetails: this.interventionDetails
    });
    // Implementar lógica de salvamento
  }

  onCancel() {
    console.log('Cancelando...');
    // Implementar lógica de cancelamento
  }
}
