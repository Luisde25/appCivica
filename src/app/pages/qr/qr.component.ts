import { Component } from '@angular/core';
import { ServicePrincipalService } from '../../services/service-principal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-qr',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.css'
})
export class QrComponent {
  constructor(private service: ServicePrincipalService) {}

  ingresarMetro() {

    if(this.service.saldo >= 3200) {
      this.service.pagarPasaje();
      alert('Ingreso autorizado');
    }
    else {
      alert('Saldo insuficiente');
    }
  }
}
