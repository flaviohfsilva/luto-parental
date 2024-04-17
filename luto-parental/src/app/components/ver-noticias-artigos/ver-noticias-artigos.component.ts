import { Component, HostListener, Input } from '@angular/core';
import { RequestService } from 'src/app/core/request.service';
import { Noticia, NoticiasArtigosImg, Tag } from 'src/app/interfaces';

@Component({
  selector: 'app-ver-noticias-artigos',
  templateUrl: './ver-noticias-artigos.component.html',
  styleUrls: ['./ver-noticias-artigos.component.scss']
})
export class VerNoticiasArtigosComponent {

  btnResponsivo: boolean = false;
  @Input() tag: Tag[] = [];
  @Input() noticia: Noticia[] = [];

  constructor(
    private requestService: RequestService
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

  images: NoticiasArtigosImg[] = [
    {
      id: 1,
      imgSrc: '../../../assets/noticias-artigos/política-humanizacao-luto-parental.png',
      imgAlt: 'Você não está sozinha',
  },
  {
    id: 2,
    imgSrc: '../../../assets/noticias-artigos/psicologia-argumento.png',
    imgAlt: 'Mãe de natimorto deve ter direitos',
  },
  {
    id: 3,
    imgSrc: '../../../assets/noticias-artigos/silencio-lutoparental-empresas.png',
    imgAlt: 'Silêncio das empresas ao Luto Parental',
  }
]

pegarNomeTag(idTag:number) {
  const tags = this.tag.find(tag => tag.id == idTag);
  const nomeTag = tags?.nome;

  // Retorna o nome das tags de cada notícia.
  return nomeTag;
}

estiloCardNoticia(idTag: number){
  const tags = this.tag.find(tag => tag.id == idTag);
  const tagId = tags?.id;

  const noticias = 1;
  const artigos = 2;

  switch (tagId) {
    case noticias:
      return 'noticia-border';
    case artigos:
      return 'artigo-border';
    default:
      return '';
  }
}

estiloTags(idTag: number) {
  const tags = this.tag.find(tag => tag.id == idTag);
  const tagId = tags?.id;

  const noticias = 1;
  const artigos = 2;

  switch (idTag) {
    case noticias:
      return 'tag-noticia';
    case artigos:
      return 'tag-artigo';
    default:
      return 'tag-noticia';
  }
}

mostrarImagensNoticia(idNoticia: number){
  const imagem = this.images.find(item => item.id === idNoticia);
  return imagem ? imagem.imgSrc : '';
}

}
