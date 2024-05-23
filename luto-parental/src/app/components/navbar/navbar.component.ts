import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/core/request.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private requestService: RequestService) {}

  ngOnInit() {
    this.verificarTamanhoTela();
  }

  toggleButton = false;
  mostrarNavbar = false;
  topLinks = false;


  @HostListener('window:resize', ['$event'])
  // Verifica o tamanho da tela
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
