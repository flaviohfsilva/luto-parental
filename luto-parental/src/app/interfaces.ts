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
  idEstado: number;
  estados: Estados[];
  // img: File | null;
}

export interface DadosPaginaHistoria {
  id: number;
  erro: boolean;
  msg: string;
  paginaAtual: number;
  dados: Historia[];
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
