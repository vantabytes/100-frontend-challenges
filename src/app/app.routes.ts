import { Routes } from '@angular/router';
import { FC001TarjetaPresentacionComponent } from './features/fc001-tarjeta-presentacion/fc001-tarjeta-presentacion.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'fc001-tarjeta-presentacion',
    component: FC001TarjetaPresentacionComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
