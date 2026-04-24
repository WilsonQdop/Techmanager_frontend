// src/app/models/ticket.ts
export type CategoryEnum = 'HARDWARE' | 'SOFTWARE' | 'NETWORK';
export type PriorityEnum = 'LOW' | 'MEDIUM' | 'HIGH';

export interface CreateTicketRequest {
  title: string;
  description: string;
  category: CategoryEnum;
  priority: PriorityEnum;
}

export interface CreateTicketResponse {
  title: string;
  description: string;
  category: CategoryEnum;
  priority: PriorityEnum;
  status: string;
  paymentConfirmed: boolean;
  createdAt: string;
  customerName: string;
}

export interface TicketSummaryResponseDTO  {
  title: string;
  category: CategoryEnum;
  priority: PriorityEnum;
  status: string;
  paymentConfirmed: boolean;
  value: number;
  createdAt: string;
  customerName: string;
  technicalName: string | null;
}

export interface TicketDetailsResponseDTO {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: string;
  status: string;
  value: number;
  baseHourlyRate: number;
  paymentConfirmed: boolean;
  createdAt: string;
  customerName: string;
  technicalName: string | null;
}

