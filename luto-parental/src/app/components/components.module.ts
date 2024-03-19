import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { NewslatterModule } from './newslatter/newslatter.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarModule,
    FooterModule,
    NewslatterModule
  ]
})
export class ComponentsModule { }
