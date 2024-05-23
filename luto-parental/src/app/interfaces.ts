export interface CarouselHome {
  id: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  rota?: string;
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
  ativo: number;
  TotalCont: number;
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
  dados: object[];
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

export interface Direitos {
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
export interface ReceberEmail {
  nome: string;
  email:string;
  mensagem: string;
  isChecked: boolean;
}

export interface VerificadorQrCode {
  valid: boolean;
}
