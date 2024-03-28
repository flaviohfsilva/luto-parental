import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor() {}

  ngOnInit() {
    this.verificarTamanhoTela();
  }

  toggleButton: boolean = false;
  mostrarNavbar: boolean = false;
  topLinks: boolean = false;

  
  @HostListener('window:resize', ['$event'])
  // Verifica o tamanho da tela
  verTamanho(event: Event){
    this.verificarTamanhoTela();
  }

  // Vai verificar e ajustar os itens para o tamanho da tela de celular.
  verificarTamanhoTela(){
    this.toggleButton = window.innerWidth <= 767;
    this.mostrarNavbar = window.innerWidth <= 767;
    this.topLinks = window.innerWidth <= 767;
  }

  // Botão da navbar
  toggleNavbar(){
    this.mostrarNavbar = !this.mostrarNavbar;
  }
}
