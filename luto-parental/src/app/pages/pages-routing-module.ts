import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterModule, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

// Vai ficar todas as rotas das páginas do nosso site
const routes: Routes = [

  {path: '', component: LandingPageComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PageRoutingModule { }
