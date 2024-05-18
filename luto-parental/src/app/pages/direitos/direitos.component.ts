import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestService } from 'src/app/core/request.service';
import { Estados, Historia, Noticia, Tag } from 'src/app/interfaces';

@Component({
  selector: 'app-direitos',
  templateUrl: './direitos.component.html',
  styleUrls: ['./direitos.component.scss']
})
export class DireitosComponent implements OnInit {

  historias: Historia[] = [];
  estados: Estados[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public dadosDaPaginaAtual: any = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public objetoPaginacao: any = [];
  historiaId = 0;
  rotaHistoria!: Subscription;
  public paginaAtual = 1;
  public proximaPagina = 0;
  public totalPaginasArray: [] = [];
  avancarPagina = true;
  voltarPagina = false;
  protected excluido = '0';
  tag: Tag[] = [];
  noticia: Noticia[] = [];

  constructor(
    private requestService: RequestService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(){
    // this.mostrarHistorias();
    this.carregarDadosPaginados(this.excluido);
    this.mostrarEstados();
    this.mostrarNoticias();
    this.mostrarTags();
  }

  mostrarHistorias(){
    this.requestService.buscarHistorias().subscribe(
      (depoimentos) => {
        this.historias = depoimentos;
        console.log('Histórias', this.historias);
      },
      (error) => {
        console.log('Erro ao buscar histórias', error)
      }
    )
  }

  mostrarEstados(){
    this.requestService.buscarEstados().subscribe(
      (estado) => {
        this.estados = estado;
        console.log('Estados', this.estados);
      },
      (error) => {
        console.log('Erro ao buscar estados', error)
      }
    )
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

  public categorias = [
    {
      categoria: 'Mais Recentes',
    },
    {
      categoria: 'Mais Antigos'
    }
  ];

  carregarDadosPaginados(excluido: string){
    this.requestService.consultarPaginacaoHistorias(excluido, this.paginaAtual, '').subscribe(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (RetornoPaginaAtual: any) => {
        this.dadosDaPaginaAtual = RetornoPaginaAtual.dados;
        this.totalPaginasArray = RetornoPaginaAtual.totalPaginas;
        console.log('CarregarDadosPaginados: ', this.dadosDaPaginaAtual)
      },
      (error) =>{
        console.log('Erro ao buscar dados páginados: ', error);
      }
    );
  }

  carregarProximaPagina(proximaPagina: boolean): void {

    this.proximaPagina = proximaPagina ? (this.paginaAtual++) : (this.paginaAtual--); // Incrementa ou decrementa paginaAtual

    console.log(this.paginaAtual);

    try {
      this.requestService
        .consultarPaginacaoHistorias(this.excluido, this.paginaAtual, '')
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

}


