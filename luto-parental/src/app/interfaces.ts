export interface CarouselHome {
  imgSrc: string;
  imgAlt: string;
  title: string;
  subtitle: string;
}

export interface Tag {
  id: number;
  nome: string;
  ativo: boolean;
  excluido: boolean;
}

export interface Estados {
  id: number;
  nome: string;
}

export interface Historia {
  id: number;
  nome: string | null;
  titulo: string | null;
  texto: string;
  genero: string;
  idTipoInformacao: number;
  dataHora: Date;
  idEstado: number;
  estados: Estados[];
  // img: File | null;
}

export interface StatusPaginaHistoria {
  erro: boolean;
  msg: string;
  paginaAtual: number;
  dados: {}[];
  avancarPagina: boolean;
  voltarPagina: boolean
}

export interface Noticia {
  id: number;
  titulo: string;
  texto: string;
  idTag: number;
  idTipoInformacao: number;
  dataHora: Date;
  tag: Tag[];
  img: string;
}

export interface NoticiasArtigosImg {
  id: number;
  imgSrc: string;
  imgAlt: string;
}

export interface CarouselSobre {
  nome: string;
  funcao: string;
  descricao: string;
  imgSrc: string;
  imgSrc2: string;
  imgPadrao: string;
  imgAlt: string;
}
