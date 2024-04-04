import { Component } from '@angular/core';
import { RequestService } from 'src/app/core/request.service';
import { Historia } from 'src/app/interfaces';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent {

  historias: Historia[] = [];

  constructor(private requestService: RequestService) {}

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
