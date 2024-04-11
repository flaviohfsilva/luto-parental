import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/core/request.service';
import { Historia } from 'src/app/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router, private requestService: RequestService) {}

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

  // rotaHistoria(historia: Historia[]) {

  //   for(let i = 0; i < historia.length; i++){
  //     const historiaDados = historia[i];

  //     this.router.navigate(['/depoimentos'], {
  //       queryParams: {
  //         id: historiaDados.id,
  //       },
  //     });

  //   }
  // }
}
