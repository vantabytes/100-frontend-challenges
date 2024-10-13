import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FC001TarjetaPresentacionComponent } from './pages/fc001-tarjeta-presentacion/fc001-tarjeta-presentacion.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'fc001-tarjeta-presentacion',
    component: FC001TarjetaPresentacionComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
