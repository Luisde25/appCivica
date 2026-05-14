import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponentComponent } from './pages/login/login-component.component';
import { QrComponent } from './pages/qr/qr.component';
import { HistoryComponent } from './pages/history/history.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SyncComponent } from './pages/synchronization/sync.component';
import { RechargeComponent } from './pages/recharge/recharge.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    AppComponent // Importa el componente standalone aquí
  ],
  bootstrap: []
})
export class AppModule { }