import { Component } from '@angular/core';
import { ServicePrincipalService } from '../../services/service-principal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recharge',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './recharge.component.html',
  styleUrl: './recharge.component.css'
})
export class RechargeComponent {
  valor: number = 0;
  mostrarRecarga = false;
  saldo = 15000;
  metodoPago = 'pse';
  montoSeleccionado = 0;
  route: Router
  constructor(
    private service: ServicePrincipalService,
    private _route: Router
  ) 
  {
  this.route = _route

  }



/* CERRAR */

cerrarRecarga(){

  this.route.navigate(['/dashboard'])

}

/* METODO */

seleccionarMetodo(
  metodo:string
){

  this.metodoPago = metodo;

}

/* MONTO */

seleccionarMonto(
  monto:number
){

  this.montoSeleccionado = monto;

}

/* RECARGAR */

recargarSaldo(){

  if(this.montoSeleccionado <= 0){
    return;
  }

  this.saldo =
    this.saldo + this.montoSeleccionado;

    Swal.fire({
      title: 'Recarga exitosa',
      text: 'Tu saldo fue actualizado',
      icon: 'success',
      confirmButtonColor: '#00a86b',
      confirmButtonText: 'Continuar'
    });

  this.montoSeleccionado = 0;

  this.mostrarRecarga = false;

}
}
