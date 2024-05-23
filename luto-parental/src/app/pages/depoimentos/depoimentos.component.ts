/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestService } from 'src/app/core/request.service';
import { Historia, Estados } from 'src/app/interfaces';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements OnInit {

  historias: Historia[] = [];
  estados: Estados[] = [];
  public dadosDaPaginaAtual: any = [];
  public objetoPaginacao: any = [];
  historiaId = 0;
  rotaHistoria!: Subscription;
  palavraFiltrada = '';
  public paginaAtual = 1;
  public proximaPagina = 0;
  public totalPaginasArray: [] = [];
  avancarPagina = true;
  voltarPagina = false;
  title = '';
  markTitle = '';
  descricao = '';
  protected excluido = '0';

  constructor(
    private requestService: RequestService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(){
    // this.mostrarHistorias();
    this.carregarDadosPaginados(this.excluido);
    this.mostrarEstados();
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

  public categorias = [
    {
      categoria: 'Mais Recentes',
    },
    {
      categoria: 'Mais Antigos'
    }
  ];

  aplicarFiltro(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.palavraFiltrada = filterValue.trim();
    console.log(this.palavraFiltrada);

    // Reiniciando o índice das páginas
    this.paginaAtual = 0;
    this.carregarProximaPagina(true);
  }



  carregarDadosPaginados(excluido: string){
    this.requestService.consultarPaginacaoHistorias(excluido, this.paginaAtual, this.palavraFiltrada).subscribe(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (RetornoPaginaAtual: any) => {
        this.dadosDaPaginaAtual = RetornoPaginaAtual.dados;
        this.totalPaginasArray = RetornoPaginaAtual.totalPaginas;
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

    const filtro = this.palavraFiltrada;
    console.log(this.paginaAtual);

    try {
      this.requestService
        .consultarPaginacaoHistorias(this.excluido, this.paginaAtual, filtro)
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

  selecionarInformacao(id: number, idTipoInformacao:number, titulo: string | null, texto: string, data: string| Date, img?:string){
    console.log('Chegou no selecionarInformacao', id, titulo, texto, data, img);

    this.title = 'Mural de';
    this.markTitle = 'histórias';
    this.descricao = 'Você não está sozinho(a). Receba e ofereça apoio na companhia de outros cuidadores que compreendem a sua dor.';

    this.router.navigate(['noticia-selecionada/'], {
      queryParams: {
        id: id,
        idTipoInformacao: idTipoInformacao,
        titulo: titulo,
        texto: texto,
        data: data,
        rotaNome: 'Depoimentos',
        secaoAtiva: 'depoimentos',
        img: img,
        title: this.title,
        markTitle: this.markTitle,
        descricao: this.descricao,
      }
    })
  }
}
