import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent {
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
}
