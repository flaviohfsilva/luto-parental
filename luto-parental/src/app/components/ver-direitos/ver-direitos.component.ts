import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-direitos',
  templateUrl: './ver-direitos.component.html',
  styleUrls: ['./ver-direitos.component.scss']
})
export class VerDireitosComponent implements OnInit {
  btnResponsivo = false;

  constructor() {}

  ngOnInit(){
    this.verificarTamanhoTela();
  }

  @HostListener('window:resize', ['$event'])
  // Verifica o tamanho da tela
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  verTamanho(event: Event){
    this.verificarTamanhoTela();
  }

  // Vai verificar e ajustar os itens para o tamanho da tela de celular.
  verificarTamanhoTela(){
    this.btnResponsivo = window.innerWidth <= 767;

  }

}
