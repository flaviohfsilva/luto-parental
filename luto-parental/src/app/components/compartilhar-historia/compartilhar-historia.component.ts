/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalHistoriasComponent } from '../modal-historias/modal-historias.component';

@Component({
  selector: 'app-compartilhar-historia',
  templateUrl: './compartilhar-historia.component.html',
  styleUrls: ['./compartilhar-historia.component.scss']
})
export class CompartilharHistoriaComponent implements OnInit {

  btnResponsivo = false;

  constructor(private dialog: MatDialog) {}

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

  enviarHistoriaFormulario(){
    const config: MatDialogConfig = {
      width: '950px',
      height: '580px',
      disableClose: true
    }
    const dialog = this.dialog.open(ModalHistoriasComponent, config);
  }
}
