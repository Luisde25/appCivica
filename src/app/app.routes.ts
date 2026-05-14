import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponentComponent } from './pages/login/login-component.component';
import { QrComponent } from './pages/qr/qr.component';
import { HistoryComponent } from './pages/history/history.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SyncComponent } from './pages/synchronization/sync.component';
import { RechargeComponent } from './pages/recharge/recharge.component';

export const routes: Routes = [
  { path: '', component: LoginComponentComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'qr', component: QrComponent },
  { path: 'recarga', component: RechargeComponent },
  { path: 'historial', component: HistoryComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'sync', component: SyncComponent }
];