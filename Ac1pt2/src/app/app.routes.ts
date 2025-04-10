import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'produto', component: ProdutoComponent},
    {path: 'sobre-nos', component: SobreComponent},
    { path: 'produto-detalhe/:id', component: ProdutoDetalheComponent },
];
