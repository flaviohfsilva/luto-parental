import { Component } from '@angular/core';
import { RequestService } from 'src/app/core/request.service';
import { Tag } from 'src/app/interfaces';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent {

  constructor(private requestService: RequestService) {}


  ngOnInit(){
    this.carregarDadosPaginados(this.excluido);
    this.mostrarTags();
  }

  public dadosDaPaginaAtual: any = [];
  public paginaAtual: number = 1;
  public proximaPagina: number = 0;
  public imagens = [];
  tag: Tag[] = [];
  avancarPagina: boolean = true;
  voltarPagina: boolean = false;
  protected excluido: string = '0';


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

  public noticias = [
    {
      imagem: 'noticia-1',
      data: '10/10/2017',
      categoria: 'NOTÍCIA',
      titulo: 'POLÍTICA DE HUMANIZAÇÃO DO LUTO PARENTAL',
      texto:
        'A Comissão de Saúde da Câmara dos Deputados aprovou o Projeto de Lei 1640/22, que institui a Política Nacional de Humanização do Luto Materno e Parental.  A relatora, deputada Jandira Feghali (PCdoB-RJ), disse que o principal ponto do texto é garantir...',
    },
    {
      imagem: 'noticia-2',
      data: '10/10/2017',
      categoria: 'ARTIGO',
      titulo:
        'POLÍTICA DE HUMANIZAÇÃO DO LULUTO PARENTAL E CONSTRUÇÃO IDENTITÁRIA: COMPREENDENDO O PROCESSO APÓS A PERDA DO FILHOTO PARENTAL',
      texto:
        'A morte de um filho é um fato inesperado pelos pais, geralmente é visto como algo contrário à natureza, incitando um luto muito particular. As manifestações desse luto são diversas...',
    },
    {
      imagem: 'noticia-3',
      data: '10/10/2017',
      categoria: 'ARTIGO',
      titulo:
        'SAIBA OS PRINCIPAIS DIREITOS RELACIONADOS À SAÚDE DAS FAMÍLIAS ENLUTADAS ',
      texto:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      imagem: 'noticia-4',
      data: '10/10/2017',
      categoria: 'NOTÍCIA',
      titulo: 'O SILÊNCIO EM TORNO DO LUTO PARENTAL DENTRO DAS EMPRESAS.',
      texto:
        'O luto parental é um tema frequentemente negligenciado nas empresas, com os departamentos de Recursos Humanos mostrando uma compreensão limitada de como proteger os direitos dos funcionários...',
    },
    {
      imagem: 'noticia-5',
      data: '10/10/2017',
      categoria: 'NOTÍCIA',
      titulo:
        'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE.',
      texto:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
    },
    {
      imagem: 'noticia-6',
      data: '10/10/2017',
      categoria: 'ARTIGO',
      titulo:
        'COMO VIVER O LUTO DE MANEIRA MAIS SAUDÁVEL E PRESERVAR A SUA SAÚDE MENTAL',
      texto:
        'A saúde mental corresponde muito mais do que somente à ausência de doenças mentais. De acordo com a Organização Mundial da Saúde (OMS), saúde mental é um estado de bem-estar no qual o indivíduo é capaz de usar...',
    },
  ];

  public categorias = [
    {
      categoria: 'NOTÍCIA',
    },
    {
      categoria: 'ARTIGO'
    }
  ];

  // public imagens = [
  //   {
  //     imagem: 'noticia-1',
  //   },

  //   {
  //     imagem: 'noticia-2',
  //   },

  //   {
  //     imagem: 'noticia-3',
  //   },

  //   {
  //     imagem: 'noticia-4',
  //   },

  //   {
  //     imagem: 'noticia-5',
  //   },

  //   {
  //     imagem: 'noticia-6',
  //   },

  // ]

  /**
   * Retorna a cor de cada categoria no DOM.
   *
   * @param categoria categorias disponíveis de notícias
   * @returns a cor da categoria
   */
  public visualizarCorCategoria(categoria: string): string {
    switch(categoria) {
      case 'NOTÍCIA':
        return '#D9B2A9';
      case 'ARTIGO':
        return '#60748D';
      default:
        return ''
    }
  }

  carregarDadosPaginados(excluido: string){
    this.requestService.consultarPaginacaoNoticias(excluido, this.paginaAtual).subscribe(
      (RetornoPaginaAtual: any) => {
        this.dadosDaPaginaAtual = RetornoPaginaAtual.dados;
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

    try {
      this.requestService
        .consultarPaginacaoNoticias(this.excluido, this.paginaAtual)
        .subscribe(
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
}
