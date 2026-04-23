import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  @Input() title: string = 'TechManager';
  @Input() badge: string = '';

  toggleTheme() {
    document.documentElement.classList.toggle('dark');
  }
}
