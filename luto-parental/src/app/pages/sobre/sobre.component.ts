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
      funcao: 'Líder de projeto | UX/UI Designer | Copywriting ',
      descricao: 'Quero agradecer por confiar em nossa plataforma. Espero que ela ofereça o acolhimento e o apoio necessário durante este momento difícil.',
      imgSrc: '../../../assets/img/sobre/hadrya-lateral.png',
      imgSrc2: '../../../assets/img/sobre/Hadrya-poster.png',
      imgPadrao: '../../../assets/img/sobre/padrao.png',
      imgAlt: 'Hadrya Maria',
  },

  {
    nome: 'Flávio Henrique',
    funcao: 'Líder de projeto | Designer UX/UI | Desenvolvedor',
    descricao: 'Que a Raízes do Amor possa ser um ponto de paz e esperança em meio à sua dor.',
    imgSrc: '../../../assets/img/sobre/flavio-lateral.png',
    imgSrc2: '../../../assets/img/sobre/flavio-poster.png',
    imgPadrao: '../../../assets/img/sobre/padrao.png',
    imgAlt: 'Flávio Henrique',
  },

  {
    nome: 'Gabriela Diniz',
    funcao: 'Desenvolvedora Front-end',
    descricao: 'Somos um espaço de apoio para as mães e famílias. Espero que sejamos um ponto de conforto e de esperança para quem procura.',
    imgSrc: '../../../assets/img/sobre/Gabi-lateral.png',
    imgSrc2: '../../../assets/img/sobre/Gabi-poster.png',
    imgPadrao: '../../../assets/img/sobre/padrao.png',
    imgAlt: 'Gabriela Diniz',
  },

  {
    nome: 'Fernando Filipe',
    funcao: 'Desenvolvedor Front-end | Documentação',
    descricao: 'As coisas vão melhorar. Tudo vai ficar bem.',
    imgSrc: '../../../assets/img/sobre/Fernando-lateral.png',
    imgSrc2: '../../../assets/img/sobre/Fernando-poster.png',
    imgPadrao: '../../../assets/img/sobre/padrao.png',
    imgAlt: 'Fernando Filipe',
  },

  {
    nome: 'Maria Laura',
    funcao: 'UX Designer | Copywriting ',
    descricao: 'Saiba que você não está sozinho. Você é amado, você é lembrado, e aqui, você sempre encontrará um lugar de compreensão e acolhimento.',
    imgSrc: '../../../assets/img/sobre/Laura-lateral.png',
    imgSrc2: '../../../assets/img/sobre/Laura-poster.png',
    imgPadrao: '../../../assets/img/sobre/padrao.png',
    imgAlt: 'Maria Laura',
  },

  {
    nome: 'Leonardo José',
    funcao: 'Desenvolvedor Front-end',
    descricao: 'Essa é a nossa forma de dizermos que vocês são importantes e nós nos importamos com vocês.',
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
