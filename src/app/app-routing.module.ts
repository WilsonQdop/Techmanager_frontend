import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { DashboardTechnicianComponent } from './pages/dashboard-technician/dashboard-technician.component';
import { DashboardClientComponent } from './pages/dashboard-client/dashboard-client.component';
import { RegisterTechnicianComponent } from './pages/register-technician/register-technician.component';
import { OpenTicketComponent } from './pages/open-ticket/open-ticket.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: RegisterComponent },
  { path: 'dashboard', component: DashboardAdminComponent },
  { path: 'dashboard-tecnico', component: DashboardTechnicianComponent },
  { path: 'dashboard-cliente', component: DashboardClientComponent },
  { path: 'tecnicos', component: RegisterTechnicianComponent },
  { path: 'abrir-chamado', component: OpenTicketComponent },
  { path: 'chamados', component: TicketsComponent },
  { path: 'configuracoes', component: SettingsComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
