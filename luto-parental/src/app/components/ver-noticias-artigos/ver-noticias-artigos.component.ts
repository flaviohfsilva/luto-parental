import { Component, HostListener } from '@angular/core';
import { RequestService } from 'src/app/core/request.service';

@Component({
  selector: 'app-ver-noticias-artigos',
  templateUrl: './ver-noticias-artigos.component.html',
  styleUrls: ['./ver-noticias-artigos.component.scss']
})
export class VerNoticiasArtigosComponent {

  btnResponsivo: boolean = false;

  constructor(
    // private requestService: RequestService
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

  // mostrarTags(){
  //   this.requestService.buscarTags().subscribe(
  //     (tags) => {

  //     },
  //     (error) => {

  //     }
  //   );
  // }
}
