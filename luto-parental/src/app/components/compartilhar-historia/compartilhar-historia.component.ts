/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalHistoriasComponent } from '../modal-historias/modal-historias.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-compartilhar-historia',
  templateUrl: './compartilhar-historia.component.html',
  styleUrls: ['./compartilhar-historia.component.scss']
})
export class CompartilharHistoriaComponent implements OnInit {

  btnResponsivo = false;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(){
    this.verificarTamanhoTela();
  }

  @HostListener('window:resize', ['$event'])
  // Verifica o tamanho da tela
  verTamanho(event: Event){
    this.verificarTamanhoTela();
  }

  // Vai verificar e ajustar os itens para o tamanho da tela de celular.
  verificarTamanhoTela(){
    this.btnResponsivo = window.innerWidth <= 767;
  }

  openSnackBar(text: string, panelClass: string) {
    this.snackBar.open(text, '', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 8 * 1000,
      panelClass: [panelClass],
    });
  }

  enviarHistoriaFormulario(){
    const config: MatDialogConfig = {
      width: '950px',
      height: '580px',
      disableClose: true
    }
    const dialog = this.dialog.open(ModalHistoriasComponent, config);

    dialog.afterClosed().subscribe(() => {
      this.openSnackBar('História enviada com sucesso!', 'green')
    })
  }
}
