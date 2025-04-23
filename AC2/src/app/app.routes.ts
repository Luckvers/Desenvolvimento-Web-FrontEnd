import { Routes } from '@angular/router';
import { ReservaViagemComponent } from './reserva-viagem/reserva-viagem.component';

export const routes: Routes = [
    {path: '', redirectTo: 'reserva-viagem', pathMatch: 'full'},
    {path: 'reserva-viagem', component: ReservaViagemComponent},
];
