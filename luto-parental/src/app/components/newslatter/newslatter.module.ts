import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewslatterComponent } from './newslatter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    NewslatterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule
  ],
  exports: [
    NewslatterComponent
  ]
})
export class NewslatterModule { }
