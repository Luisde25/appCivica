import { Component } from '@angular/core';
import { ServicePrincipalService } from '../../services/service-principal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recharge',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './recharge.component.html',
  styleUrl: './recharge.component.css'
})
export class RechargeComponent {
  valor: number = 0;

  constructor(private service: ServicePrincipalService) {}

  recargar() {

    this.service.recargar(this.valor);

    alert('Recarga exitosa');
  }
}
