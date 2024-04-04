import { Component, HostListener } from '@angular/core';
import { RequestService } from 'src/app/core/request.service';
import { Tag } from 'src/app/interfaces';

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
      imgSrc: '../../../assets/carousel/voce-nao-esta-sozinha.png',
      imgAlt: 'Você não está sozinha',
      title: 'Você não está sozinha! Torne mais leve a dor do luto.',
      subtitle: 'Conte com atendimento emergencial gratuito com psicólogas voluntárias e especializadas em luto parental.'
  },
  {
    imgSrc: '../../../assets/carousel/mae-natimorto.png',
    imgAlt: 'Mãe de natimorto deve ter direitos',
    title: 'Mãe de natimorto deve ter direito a ala separada na maternidade.',
    subtitle: 'Mães de natimortos tem direito a acomodação em ala ou leitos separados das demais gestantes.'
  }
]
}
