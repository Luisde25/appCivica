import { Component } from '@angular/core';
import { ServicePrincipalService } from '../../services/service-principal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  router:Router

  constructor(
    public service: ServicePrincipalService,
    private _router: Router
    
  ) 
  {

    this.router = _router
  }


  logout(){
    this.router.navigate([''])
  }

  abrirModalQR(){
    this.router.navigate(['/qr'])
  }
  abrirModalRecharge(){
    this.router.navigate(['/recarga'])
  }

  irHistorial(){
    this.router.navigate(['/historial'])
  }

  irProfile(){
    this.router.navigate(['/perfil'])
  }
  
}
