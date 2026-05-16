import { Component } from '@angular/core';
import { ServicePrincipalService } from '../../services/service-principal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  router:Router

  constructor(
    public service: ServicePrincipalService,
    private _router: Router
    
  ) 
  {

    this.router = _router
  }

  mostrarHistorial = false;

/* HISTORIAL RECARGAS */
historialRecargas:any[] = [];

/* HISTORIAL QR */
historialQR:any[] = [];


/* CERRAR */
cerrarHistorial(){

  this.router.navigate(['/dashboard'])

}
}
