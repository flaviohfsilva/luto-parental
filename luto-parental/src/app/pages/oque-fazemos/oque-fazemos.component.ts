import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/core/request.service';
import { Historia } from 'src/app/interfaces';

@Component({
  selector: 'app-oque-fazemos',
  templateUrl: './oque-fazemos.component.html',
  styleUrls: ['./oque-fazemos.component.scss']
})
export class OqueFazemosComponent implements OnInit {

  historias: Historia[] = [];

  constructor(
    private requestService: RequestService,
    private router: Router,
  ){}

  ngOnInit(){
    this.mostrarHistorias();
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

  selecionarInformacao(id: number, idTipoInformacao:number, titulo: string | null, texto: string, data: string| Date, img?:string){
    console.log('Chegou no selecionarInformacao', id, titulo, texto, data, img);



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
        title: 'Mural de',
        markTitle: 'histórias',
        descricao: 'Você não está sozinho(a). Receba e ofereça apoio na companhia de outros cuidadores que compreendem a sua dor.',
      }
    })
  }

}
