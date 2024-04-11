
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalHistoriasComponent } from './modal-historias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ModalHistoriasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ModalHistoriasComponent
  ]
})
export class ModalHistoriasModule { }
