import { Component } from '@angular/core';
import { ServicePrincipalService } from '../../services/service-principal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.css'
})
export class QrComponent {
  route: Router
  qrGenerado = false;
  qrUrl = '';
  constructor(
    private service: ServicePrincipalService,
    private _route: Router
  
  ) {

    this.route = _route

  }


cerrarModalQR(){
  this.route.navigate(['/dashboard'])
}

generarQR(){

  this.qrGenerado = true;

  this.qrUrl =
  'https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=MetroDemo';

}


}
