import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/core/request.service';
import { Direitos } from 'src/app/interfaces';

@Component({
  selector: 'app-ver-direitos',
  templateUrl: './ver-direitos.component.html',
  styleUrls: ['./ver-direitos.component.scss']
})
export class VerDireitosComponent implements OnInit {
  btnResponsivo = false;
  direitos: Direitos[] = [];
  title = '';
  markTitle = '';
  descricao = '';

  constructor(
    private requestService: RequestService,
    private router: Router
  ) {}

  ngOnInit(){
    this.verificarTamanhoTela();
    this.mostrarDireitos();
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

  mostrarDireitos(){
    this.requestService.buscarDireitos().subscribe(
      (direitos) => {
        this.direitos = direitos;
        console.log('Histórias', this.direitos);
      },
      (error) => {
        console.log('Erro ao buscar histórias', error)
      }
    )
  }

  selecionarInformacao(id: number, idTipoInformacao:number, titulo: string, texto: string, data: string| Date, img:string){
    console.log('Chegou no selecionarInformacao', id, titulo, texto, data, img);

    this.title = 'Mural de';
    this.markTitle = 'direitos';
    this.descricao = 'Conheça os principais direitos relacionados à Saúde  e à Assistência Social no contexto do luto perinatal e também os caminhos para buscar a Justiça, caso seus direitos não sejam respeitados.';

    this.router.navigate(['noticia-selecionada/'], {
      queryParams: {
        id: id,
        idTipoInformacao: idTipoInformacao,
        titulo: titulo,
        texto: texto,
        data: data,
        rotaNome: 'Direitos',
        secaoAtiva: 'direitos',
        img: img,
        title: this.title,
        markTitle: this.markTitle,
        descricao: this.descricao,
      }
    })
  }

}
