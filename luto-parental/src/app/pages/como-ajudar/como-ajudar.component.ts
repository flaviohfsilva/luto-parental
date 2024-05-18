import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/core/request.service';
import { Historia } from 'src/app/interfaces';


@Component({
 selector: 'app-como-ajudar',
 templateUrl: './como-ajudar.component.html',
 styleUrls: ['./como-ajudar.component.scss']
})
export class ComoAjudarComponent implements OnInit {
 historias: Historia[] = [];
 texto = '';


 constructor(
   private requestService: RequestService,
 ) {}


 ngOnInit() {
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
