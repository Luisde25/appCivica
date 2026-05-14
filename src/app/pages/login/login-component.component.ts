import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {


  routers:Router;

  constructor(private router: Router) {
   this.routers = router
  }

  isReactive(){
    this.routers.navigate(['/dashboard'])
  }

}
