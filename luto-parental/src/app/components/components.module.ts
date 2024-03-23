import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { NewslatterModule } from './newslatter/newslatter.module';
import { AngularMaterialModule } from '../angular-material.module';
import { CompartilharHistoriaComponent } from './compartilhar-historia/compartilhar-historia.component';




@NgModule({
  declarations: [
    CompartilharHistoriaComponent
  ],
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
