import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/core/request.service';
import { Noticia, Tag } from 'src/app/interfaces';

@Component({
  selector: 'app-noticia-selecionada',
  templateUrl: './noticia-selecionada.component.html',
  styleUrls: ['./noticia-selecionada.component.scss']
})
export class NoticiaSelecionadaComponent implements OnInit {

  tag: Tag[] = [];
  noticia: Noticia[] = [];
  id!: number;
  idTipoInformacao!:number;
  titulo!: string;
  texto!:string;
  data!:string;
  img!:string;
  title!:string;
  markTitle!: string;
  descricao!: string;
  rotaAtiva!: string;
  rotaNome!:string;

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {

    // Recebendo os dados passados via queryParams do componente noticias.ts
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.idTipoInformacao = params['idTipoInformacao'];
      this.titulo = params['titulo'];
      this.title = params['title'];
      this.markTitle = params['markTitle'];
      this.descricao = params['descricao'];
      this.rotaAtiva = params['secaoAtiva'];
      this.rotaNome = params['rotaNome']
      this.texto = params['texto'];
      this.data = params['data'];
      this.img = params['img'];
    });

    this.mostrarNoticias();
    this.mostrarTags();

    console.log(this.texto)
  }

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

  mostrarNoticias(){
    this.requestService.buscarNoticias().subscribe(
      (noticias) => {
        this.noticia = noticias;
        console.log('Notícias', this.noticia)
      },
      (error) => {
        console.log( 'Erro ao mostrar notícias', error)
      }
    )
  }
}
