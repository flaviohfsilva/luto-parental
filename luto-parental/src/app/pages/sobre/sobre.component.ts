import { CarouselSobre } from '../../interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  selectedIndex = 0;
  carouselAutomatic = true;

  ngOnInit(){
    if(this.carouselAutomatic){
      this.carouselAutomatico();
    }
  }

  carouselSobre: CarouselSobre[] = [
    {
      nome: 'Hadrya Maria',
      funcao: 'UX/UI Designer | Documentação ',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
      imgSrc: '../../../assets/img/sobre/hadrya-lateral.png',
      imgSrc2: '../../../assets/img/sobre/Hadrya-poster.png',
      imgPadrao: '../../../assets/img/sobre/padrao.png',
      imgAlt: 'Hadrya Maria',
  },

  {
    nome: 'Flávio Henrique',
    funcao: 'Desenvolvedor Front e Back-end | Banco de dados',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    imgSrc: '../../../assets/img/sobre/flavio-lateral.png',
    imgSrc2: '../../../assets/img/sobre/flavio-poster.png',
    imgPadrao: '../../../assets/img/sobre/padrao.png',
    imgAlt: 'Flávio Henrique',
  },

  {
    nome: 'Gabriela Diniz',
    funcao: 'Desenvolvedora Front-end | Documentação',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    imgSrc: '../../../assets/img/sobre/Gabi-lateral.png',
    imgSrc2: '../../../assets/img/sobre/Gabi-poster.png',
    imgPadrao: '../../../assets/img/sobre/padrao.png',
    imgAlt: 'Gabriela Diniz',
  },

  {
    nome: 'Fernando Filipe',
    funcao: 'Desenvolvedor Front-end | Documentação',
    descricao: '',
    imgSrc: '../../../assets/img/sobre/Fernando-lateral.png',
    imgSrc2: '../../../assets/img/sobre/Fernando-poster.png',
    imgPadrao: '../../../assets/img/sobre/padrao.png',
    imgAlt: 'Fernando Filipe',
  },

  {
    nome: 'Maria Laura',
    funcao: 'UX Designer | Documentação ',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    imgSrc: '../../../assets/img/sobre/Laura-lateral.png',
    imgSrc2: '../../../assets/img/sobre/Laura-poster.png',
    imgPadrao: '../../../assets/img/sobre/padrao.png',
    imgAlt: 'Maria Laura',
  },

  {
    nome: 'Leonardo José',
    funcao: 'Desenvolvedor Front-end | Documentação',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    imgSrc: '../../../assets/img/sobre/leo-lateral.png',
    imgSrc2: '../../../assets/img/sobre/leo-poster.png',
    imgPadrao: '../../../assets/img/sobre/padrao.png',
    imgAlt: 'Leonardo José',
  },

  ]

  passarSliderCarousel(index: number){
    this.selectedIndex = index;
  }

  voltarCarousel(){
    if(this.selectedIndex === 0){
      this.selectedIndex = this.carouselSobre.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  avancarCarousel(){
    if(this.selectedIndex === this.carouselSobre.length - 1){
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  carouselAutomatico(){
    setInterval(() => {
      this.avancarCarousel();
    }, 8000);
  }

}
