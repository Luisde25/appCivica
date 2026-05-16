import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  routers:Router;

  constructor(private router: Router) {
   this.routers = router
  }


  cerrarPerfil(){

    this.routers.navigate(['/dashboard'])
  
  }
}
