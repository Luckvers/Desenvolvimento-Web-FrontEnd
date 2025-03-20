import { Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ApolicedeSeguroComponent } from './apolicede-seguro/apolicede-seguro.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { ConversordeTemperaturaComponent } from './conversorde-temperatura/conversorde-temperatura.component';
import { CalculadoradeIMCComponent } from './calculadorade-imc/calculadorade-imc.component';

export const routes: Routes = [
    {path: '', redirectTo: 'calcular-media', pathMatch: 'full'},
    {path: 'calcular-media', component: CalcularMediaComponent},
    {path:'calculadora',component: CalculadoraComponent},
    {path:'apolice', component: ApolicedeSeguroComponent},
    {path:'conversor', component: ConversordeTemperaturaComponent},
    {path:'IMC', component: CalculadoradeIMCComponent},
];
