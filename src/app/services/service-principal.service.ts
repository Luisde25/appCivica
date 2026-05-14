import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicePrincipalService {
  saldo: number = 15000;

  historial = [
    {
      tipo: 'Ingreso Metro',
      valor: -3200,
      fecha: '13/05/2026 08:00 AM'
    }
  ];

  online: boolean = navigator.onLine;

  constructor() {
    window.addEventListener('online', () => {
      this.online = true;
    });

    window.addEventListener('offline', () => {
      this.online = false;
    });
  }

  recargar(valor: number) {
    this.saldo += valor;

    this.historial.unshift({
      tipo: 'Recarga',
      valor: valor,
      fecha: new Date().toLocaleString()
    });
  }

  pagarPasaje() {
    this.saldo -= 3200;

    this.historial.unshift({
      tipo: 'Ingreso Metro',
      valor: -3200,
      fecha: new Date().toLocaleString()
    });
  }
}
