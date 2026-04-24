// src/app/services/ticket.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CreateTicketRequest,
  CreateTicketResponse,
  TicketDetailsResponseDTO,
  TicketSummaryResponseDTO 
} from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private readonly API_URL = 'http://localhost:8080/ticket';

  constructor(private http: HttpClient) {}

  createTicket(data: CreateTicketRequest): Observable<CreateTicketResponse> {
    return this.http.post<CreateTicketResponse>(`${this.API_URL}/create`, data);
  }

  getAllTickets(): Observable<TicketSummaryResponseDTO []> {
    return this.http.get<TicketSummaryResponseDTO []>(`${this.API_URL}/findAll`);
  }

  getMyTickets(): Observable<TicketSummaryResponseDTO []> {
  return this.http.get<TicketSummaryResponseDTO []>(`${this.API_URL}/findMyTickets`);
}

getTicketDetails(ticketId: string): Observable<TicketDetailsResponseDTO> {
  return this.http.get<TicketDetailsResponseDTO>(`${this.API_URL}/ticketDetails/${ticketId}`);
}

assignTicket(ticketId: string): Observable<any> {
  return this.http.put(`${this.API_URL}/technical/assign/${ticketId}`, {});
}

}
