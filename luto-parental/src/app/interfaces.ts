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
  estado: number,
  // img: File | null;
}

export interface NoticiasArtigosImg {
  imgSrc: string;
  imgAlt: string;
}
