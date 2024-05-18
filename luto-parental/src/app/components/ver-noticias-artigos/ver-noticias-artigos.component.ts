import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/core/request.service';
import { Noticia, NoticiasArtigosImg, Tag } from 'src/app/interfaces';

@Component({
  selector: 'app-ver-noticias-artigos',
  templateUrl: './ver-noticias-artigos.component.html',
  styleUrls: ['./ver-noticias-artigos.component.scss']
})
export class VerNoticiasArtigosComponent implements OnInit {

  btnResponsivo = false;
  title = '';
  markTitle = '';
  descricao = '';
  @Input() tag: Tag[] = [];
  @Input() noticia: Noticia[] = [];

  constructor(
    private requestService: RequestService,
    private router: Router
    ) {}

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

selecionarInformacao(id: number, idTipoInformacao:number, titulo: string, texto: string, data: string| Date, img:string){
  console.log('Chegou no selecionarInformacao', id, titulo, texto, data, img);

  this.title = 'Quadro de';
  this.markTitle = 'notícias';
  this.descricao = 'Acompanhe sobre as últimas notícias sobre o luto parental, artigos, leis de apoio aos pais  aos pais enlutados e muito mais.';

  this.router.navigate(['noticia-selecionada/'], {
    queryParams: {
      id: id,
      idTipoInformacao: idTipoInformacao,
      titulo: titulo,
      texto: texto,
      data: data,
      rotaNome: 'Notícias',
      secaoAtiva: 'noticias',
      img: img,
      title: this.title,
      markTitle: this.markTitle,
      descricao: this.descricao,
    }
  })
}

}
