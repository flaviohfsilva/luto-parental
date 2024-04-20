import { Injectable, NgModule, Component } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterModule, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { SobreComponent } from './sobre/sobre.component';
import { NoticiaSelecionadaComponent } from './noticia-selecionada/noticia-selecionada.component';

// Vai ficar todas as rotas das páginas do nosso site
const routes: Routes = [

  { path: '', component: LandingPageComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'depoimentos', component: DepoimentosComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'noticia-selecionada', component: NoticiaSelecionadaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PageRoutingModule { }
