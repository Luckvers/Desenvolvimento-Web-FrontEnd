import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { TelaFilho1Component } from './tela-filho1/tela-filho1.component';
import { TelaFilho2Component } from './tela-filho2/tela-filho2.component';
import { MediaSimplxesComponent } from './media-simples/media-simples.component';
import { ExemploDiretivasComponent } from './exemplo-diretivas/exemplo-diretivas.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path:'calculadora',component: CalculadoraComponent},
    {path:'media-simples', component: MediaSimplxesComponent},
    {path: 'exemplo-diretiva', component: ExemploDiretivasComponent},
    {path: 'lista-tarefas', component: ListaTarefasComponent},
    {path: 'cliente-detalhe', component: ClienteDetalheComponent},
    
    {path: 'tela-pai', component: TelaPaiComponent, 
        children:[  
            {path: 'tela-filho1', component: TelaFilho1Component},
            {path: 'tela-filho2', component: TelaFilho2Component}
        ]
    },
    { path: 'detalhe/:id', component: ClienteDetalheComponent },
    {path: '**', component:PaginaNaoEncontradaComponent},
];
