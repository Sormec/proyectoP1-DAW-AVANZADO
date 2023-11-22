import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './login/login.component';
import { ModuloVotarComponent } from './modulo-votar/modulo-votar.component';
import { ModuloVerResultadosComponent } from './modulo-ver-resultados/modulo-ver-resultados.component';

const routes: Routes = [
  {path: 'Inicio', component: PaginaInicialComponent},
  {path: '', component: LoginComponent},
  {path: 'modulo-votacion', component: ModuloVotarComponent},
  {path: 'modulo-resultados', component: ModuloVerResultadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
