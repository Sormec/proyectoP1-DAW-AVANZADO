import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './login/login.component';
import { ModuloVotarComponent } from './modulo-votar/modulo-votar.component';

const routes: Routes = [
  {path: 'Inicio', component: PaginaInicialComponent},
  {path: '', component: LoginComponent},
  {path: 'modulo-votacion', component: ModuloVotarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
