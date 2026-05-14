import { Component } from '@angular/core';
import { ServicePrincipalService } from '../../services/service-principal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-history',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  constructor(public service: ServicePrincipalService) {}
}
