import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/core/request.service';
import { Noticia, Tag } from 'src/app/interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  public historias = [
    {
      titulo: 'Meu sonho de ser mães e as tentativas pela maternidade',
      conteudo:
        'Desde sempre sonhava em ser mãe, mas as tentativas frustadas me deixam bastante triste. A cada tentativa que dá errado é um aperto em meu coração e a incerteza de que meu sonho...',
    },
    {
      titulo: 'Encontrando e retomando a esperança',
      conteudo:
        'Enfrentei uma das provações mais difíceis da minha vida, quando perdi o meu filho recém-nascido. Estou extremamente abalada e impotente, sem forças para nada. No entanto, com o apoio de grupos...',
    },
    {
      titulo: 'Um novo começo após a perda do meu filho querido',
      conteudo:
        'Após perdermos nossos gêmeos prematuros, enfrentamos um período de profunda tristeza e desespero. No entanto, através de terapia individual e familiar, encontramos um caminho de cura... ',
    },
  ];

  constructor(
    private requestService: RequestService,
    private router: Router,
  ) {}


  ngOnInit(){
    this.carregarDadosPaginados(this.excluido);
    this.mostrarTags();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public dadosDaPaginaAtual: any = [];
  noticias: Noticia[] = [];
  public paginaAtual = 1;
  public proximaPagina = 0;
  public palavraFiltrada = '';
  public totalPaginasArray = [];
  public imagens = [];
  tag: Tag[] = [];
  avancarPagina = true;
  voltarPagina = false;
  title = '';
  markTitle = '';
  descricao = '';
  protected excluido = '0';



  public categorias = [
    {
      categoria: 'Notícias',
    },
    {
      categoria: 'Artigos'
    },
    {
      categoria: 'Mais Recentes'
    },
    {
      categoria: 'Mais Antigos'
    }
  ];

  /**
   * Retorna a cor de cada categoria no DOM.
   *
   * @param categoria categorias disponíveis de notícias
   * @returns a cor da categoria
   */
  public visualizarCorCategoria(categoria: string): string {
    switch(categoria) {
      case 'Notícias':
        return '#D9B2A9';
      case 'Artigos':
        return '#60748D';
      case 'Mais Recentes':
        return '#60748D';
      case 'Mais Antigas':
        return '#60748D';
      default:
        return ''
    }
  }

  aplicarFiltro(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.palavraFiltrada = filterValue.trim();
    console.log(this.palavraFiltrada)
    // Reiniciando o índice das páginas
    this.paginaAtual = 0;
    this.carregarProximaPagina(true);
  }


  carregarDadosPaginados(excluido: string){
    this.requestService.consultarPaginacaoNoticias(excluido, this.paginaAtual, this.palavraFiltrada).subscribe(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (RetornoPaginaAtual: any) => {
        this.dadosDaPaginaAtual = RetornoPaginaAtual.dados;
        this.totalPaginasArray = RetornoPaginaAtual.totalPaginas;
        console.log('TotalPaginas', this.totalPaginasArray)
        console.log('CarregarDadosPaginados: ', this.dadosDaPaginaAtual)
      },
      (error) => {
        console.log('Erro ao buscar dados páginados: ', error);
      }
    );
  }

  carregarProximaPagina(proximaPagina: boolean): void {

    proximaPagina ? (this.paginaAtual++) : (this.paginaAtual--); // Incrementa ou decrementa paginaAtual

    console.log(this.paginaAtual);

    const filtro = this.palavraFiltrada;
    console.log('A: ', filtro)

    try {
      this.requestService
        .consultarPaginacaoNoticias(this.excluido, this.paginaAtual, filtro)
        .subscribe(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (dadosPaginaAtual: any) => {
            this.dadosDaPaginaAtual = dadosPaginaAtual.dados;

            // Vai armazenar nas variáveis os valores que vem do back-end para passar as páginas.
            this.avancarPagina = dadosPaginaAtual.avancarPagina;
            this.voltarPagina = dadosPaginaAtual.voltarPagina;

            // Atualiza os dados da página atual
            this.carregarDadosPaginados(this.excluido);
            console.log('Dados da página: ', this.dadosDaPaginaAtual);
          },
          (error) => {
            console.log(
              'Erro ao fazer paginação. Não há páginas para passar!',
              error
            );
          }
        );
    } catch (error) {
      console.log('Erro ao fazer paginação.', error);
    }
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


  pegarNomeTag(idTag:number) {
    const tags = this.tag.find(tag => tag.id == idTag);
    const nomeTag = tags?.nome;

    // Retorna o nome das tags de cada notícia.
    return nomeTag;
  }

  estiloTags(idTag: number) {
    // const tags = this.tag.find(tag => tag.id == idTag);
    // const tagId = tags?.id;

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
