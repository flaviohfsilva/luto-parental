import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/core/request.service';
import { Historia } from 'src/app/interfaces';

@Component({
  selector: 'app-ver-historias',
  templateUrl: './ver-historias.component.html',
  styleUrls: ['./ver-historias.component.scss']
})
export class VerHistoriasComponent implements OnInit {

  historias: Historia[] = [];
  btnResponsivo = false;
  title = '';
  markTitle = '';
  descricao = '';

  constructor(
    private requestService: RequestService,
    private router: Router
  ) {}

  ngOnInit(){
    this.verificarTamanhoTela();
    this.mostrarHistorias();
  }

  @HostListener('window:resize', ['$event'])
  // Verifica o tamanho da tela
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  verTamanho(event: Event){
    this.verificarTamanhoTela();
  }

  // Vai verificar e ajustar os itens para o tamanho da tela de celular.
  verificarTamanhoTela(){
    this.btnResponsivo = window.innerWidth <= 767;
  }

  mostrarHistorias(){
    this.requestService.buscarHistorias().subscribe(
      (historia) => {
        this.historias = historia;
        console.log('Ver histórias', this.historias);
      },
      (error) =>{
        console.log('Erro ao mostrar histórias', error);
      }
    )
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
