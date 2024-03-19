import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewslatterComponent } from './newslatter.component';



@NgModule({
  declarations: [
    NewslatterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewslatterComponent
  ]
})
export class NewslatterModule { }
