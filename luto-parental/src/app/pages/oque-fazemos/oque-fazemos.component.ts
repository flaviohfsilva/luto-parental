import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/core/request.service';
import { Historia } from 'src/app/interfaces';

@Component({
  selector: 'app-oque-fazemos',
  templateUrl: './oque-fazemos.component.html',
  styleUrls: ['./oque-fazemos.component.scss']
})
export class OqueFazemosComponent implements OnInit {

  historias: Historia[] = [];

  constructor(private requestService: RequestService){}

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

}
