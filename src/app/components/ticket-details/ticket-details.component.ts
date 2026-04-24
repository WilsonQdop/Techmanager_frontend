import { Component, Input } from '@angular/core';
import { TicketDetailsResponseDTO } from '../../models/ticket';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent {
  @Input() ticket!: TicketDetailsResponseDTO;
  show = false;

  constructor(private ticketService: TicketService) {}

  open(ticket: TicketDetailsResponseDTO) {
    this.ticket = ticket;
    this.show = true;
  }

  close() {
    this.show = false;
  }

  assignToMe() {
    this.ticketService.assignTicket(this.ticket.id).subscribe(() => {
      alert('Chamado atribuído com sucesso!');
      this.close();
    });
  }
}
