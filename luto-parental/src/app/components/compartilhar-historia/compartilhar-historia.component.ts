import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-compartilhar-historia',
  templateUrl: './compartilhar-historia.component.html',
  styleUrls: ['./compartilhar-historia.component.scss']
})
export class CompartilharHistoriaComponent {

  btnResponsivo: boolean = false;

  constructor() {}

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
}
