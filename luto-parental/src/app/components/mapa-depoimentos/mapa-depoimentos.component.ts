import { Component, Input, OnInit } from '@angular/core';
import { Estados } from 'src/app/interfaces';

@Component({
  selector: 'app-mapa-depoimentos',
  templateUrl: './mapa-depoimentos.component.html',
  styleUrls: ['./mapa-depoimentos.component.scss']
})
export class MapaDepoimentosComponent implements OnInit{



  @Input() estados: Estados[] = [];



  ngOnInit() {
    console.log('Mapa: ', this.estados);
  }

  tooltip = {
    display: 'none',
    top: 0,
    left: 0,
    nome: '',
    TotalCont: 0
  };


  showTooltip(event: MouseEvent): void {
    const target = event.target as SVGElement;
    const idEstado = target.parentElement?.getAttribute('data-id');

    if (idEstado) {
      const estadosDados = this.estados.find(state => state.id.toString() === idEstado);

      if (estadosDados) {
        this.tooltip.nome = estadosDados.nome;
        this.tooltip.TotalCont = estadosDados.TotalCont;
        this.tooltip.display = 'block';
      }
    }
  }

  moveTooltip(event: MouseEvent): void {
    this.tooltip.top = event.clientY + 10;
    this.tooltip.left = event.clientX + 10;
  }

  hideTooltip(): void {
    this.tooltip.display = 'none';
  }


}
