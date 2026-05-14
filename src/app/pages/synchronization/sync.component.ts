import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sync',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './sync.component.html',
  styleUrl: './sync.component.css'
})
export class SyncComponent {
  estado: string = 'Pendiente de sincronización';

  sincronizar() {

    this.estado = 'Sincronizando...';

    setTimeout(() => {
      this.estado = 'Datos sincronizados correctamente';
    }, 3000);
  }
}
