import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';

const routes: Routes = [
  // Vai ser responsável por carregar as rotas das páginas.
  {
    path: 'page',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },

  // Direciona para nossa tela principal, a Landing Page.
  { path: 'home', component: LandingPageComponent },
  {
    path: 'noticias',
    component: NoticiasComponent,
  },
  // Redireciona para a Landing Page caso tenha algum erro.
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
