import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { NewslatterModule } from './newslatter/newslatter.module';
import { AngularMaterialModule } from '../angular-material.module';
import { CompartilharHistoriaComponent } from './compartilhar-historia/compartilhar-historia.component';
import { VerNoticiasArtigosComponent } from './ver-noticias-artigos/ver-noticias-artigos.component';
import { VerHistoriasComponent } from './ver-historias/ver-historias.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    NavbarModule,
    FooterModule,
    NewslatterModule
  ]
})
export class ComponentsModule { }
