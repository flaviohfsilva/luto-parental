import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RequestService } from 'src/app/core/request.service';
import { DadosPaginaHistoria, Historia } from 'src/app/interfaces';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent {

  historias: Historia[] = [];
  dadosDaPaginaAtual: any = [];
  historiaId: number = 0;
  rotaHistoria!: Subscription;
  public paginaAtual: number = 1;

  constructor(
    private requestService: RequestService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(){
    this.mostrarHistorias();
    // this.carregarDadosPagina();
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

  carregarDadosPagina(idHistoria: number){
    this.requestService.consultarPaginacaoHistorias(idHistoria, this.paginaAtual).subscribe(
      (pagina) => {
        this.dadosDaPaginaAtual = pagina;
        console.log('Dados da primeira página: ', this.dadosDaPaginaAtual)
      },
      (error) =>{
        console.log('Erro ao buscar dados páginados: ', error);
      }
    )
  }

  carregarProximaPagina(proximaPagina: boolean): void {
    for(let i =0 ; i < this.historias.length; i++) {
      const historia = this.historias[i];

      const idHistoria = historia.id;

      proximaPagina
        ? (this.paginaAtual = this.paginaAtual + 1)
        : (this.paginaAtual = this.paginaAtual - 1);

      try {
        this.requestService.consultarPaginacaoHistorias(idHistoria, this.paginaAtual).subscribe(
          (dadosPaginaAtual) => {
            this.dadosDaPaginaAtual = dadosPaginaAtual;
            this.carregarDadosPagina(idHistoria);
            console.log('Dados da página: ', this.dadosDaPaginaAtual)
          }
        )
      } catch (error) {
        console.log('Erro ao fazer paginação. Não há paginas para passar!', error)
      }
    }

  }



}
