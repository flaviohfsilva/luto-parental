import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [

  // Vai ser responsável por carregar as rotas das páginas.
  {
    path: 'page',
    loadChildren: () => import ('./pages/pages.module').then(m => m.PagesModule),
  },

  // Direciona para nossa tela principal, a Landing Page.
  {path: 'home', component: LandingPageComponent},

  // Redireciona para a Landing Page caso tenha algum erro.
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
