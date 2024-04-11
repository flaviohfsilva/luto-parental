import { Component, HostListener } from '@angular/core';
import { RequestService } from 'src/app/core/request.service';
import { Historia } from 'src/app/interfaces';

@Component({
  selector: 'app-ver-historias',
  templateUrl: './ver-historias.component.html',
  styleUrls: ['./ver-historias.component.scss']
})
export class VerHistoriasComponent {

  historias: Historia[] = [];
  btnResponsivo: boolean = false;

  constructor(private requestService: RequestService) {}

  ngOnInit(){
    this.verificarTamanhoTela();
    this.mostrarHistorias();
  }

  @HostListener('window:resize', ['$event'])
  // Verifica o tamanho da tela
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
}
