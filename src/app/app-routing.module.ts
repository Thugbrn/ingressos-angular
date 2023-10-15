import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'fotos',
    component: FotosComponent
  },
  {
    path: 'comentarios',
    component: ComentariosComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
