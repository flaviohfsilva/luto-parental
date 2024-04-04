import { Component, HostListener } from '@angular/core';
import { RequestService } from 'src/app/core/request.service';
import { NoticiasArtigosImg, Tag } from 'src/app/interfaces';

@Component({
  selector: 'app-ver-noticias-artigos',
  templateUrl: './ver-noticias-artigos.component.html',
  styleUrls: ['./ver-noticias-artigos.component.scss']
})
export class VerNoticiasArtigosComponent {

  btnResponsivo: boolean = false;
  tag: Tag[] = [];

  constructor(
    private requestService: RequestService
    ) {}

  ngOnInit(){
    this.verificarTamanhoTela();
    this.mostrarTags();
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

  mostrarTags(){
    this.requestService.buscarTags().subscribe(
      (tags) => {
        this.tag = tags;
        console.log('Tags: ', this.tag);
      },
      (error) => {
        console.log('Erro: ', error)
      }
    );
  }

  images: NoticiasArtigosImg[] = [
    {
      imgSrc: '../../../assets/noticias-artigos/image 2.png',
      imgAlt: 'Você não está sozinha',
  },
  {
    imgSrc: '../../../assets/noticias-artigos/psicologia-argumento.png',
    imgAlt: 'Mãe de natimorto deve ter direitos',
  },
  {
    imgSrc: '../../../assets/noticias-artigos/silencio-lutoparental-empresas.png',
    imgAlt: 'Silêncio das empresas ao Luto Parental',
  }
]
}
