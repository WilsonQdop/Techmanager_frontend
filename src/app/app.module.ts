import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { DashboardTechnicianComponent } from './pages/dashboard-technician/dashboard-technician.component';
import { DashboardClientComponent } from './pages/dashboard-client/dashboard-client.component';
import { RegisterTechnicianComponent } from './pages/register-technician/register-technician.component';
import { OpenTicketComponent } from './pages/open-ticket/open-ticket.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { SettingsComponent } from './pages/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardAdminComponent,
    DashboardTechnicianComponent,
    DashboardClientComponent,
    RegisterTechnicianComponent,
    OpenTicketComponent,
    TicketsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
