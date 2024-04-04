import { Component, HostListener } from '@angular/core';
import { RequestService } from 'src/app/core/request.service';
import { CarouselHome, Historia } from 'src/app/interfaces';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  selectedIndex: number = 0;
  sliders: boolean = true;
  controls: boolean = true;
  carouselImages: boolean = false;
  carouselAutomatic: boolean = true;
  textCarousel: boolean = true;
  historias: Historia[] = [];

  constructor(private requestService: RequestService) {}

  ngOnInit() {
    this.verificarTamanhoTela();
    this.mostrarHistorias();
    
    if(this.carouselAutomatic){
      this.carouselAutomatico();
    }
  }

  @HostListener('window:resize', ['$event'])
  // Verifica o tamanho da tela
  verTamanho(event: Event){
    this.verificarTamanhoTela();
  }

  //
  images: CarouselHome[] = [
      {
        imgSrc: '../../../assets/carousel/voce-nao-esta-sozinha.png',
        imgAlt: 'Você não está sozinha',
        title: 'Você não está sozinha! Torne mais leve a dor do luto.',
        subtitle: 'Conte com atendimento emergencial gratuito com psicólogas voluntárias e especializadas em luto parental.'
    },
    {
      imgSrc: '../../../assets/carousel/mae-natimorto.png',
      imgAlt: 'Mãe de natimorto deve ter direitos',
      title: 'Mãe de natimorto deve ter direito a ala separada na maternidade.',
      subtitle: 'Mães de natimortos tem direito a acomodação em ala ou leitos separados das demais gestantes.'
    }
  ]

  passarSliderCarousel(index: number){
    this.selectedIndex = index;
  }

  voltarCarousel(){
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  avancarCarousel(){
    if(this.selectedIndex === this.images.length - 1){
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

  verificarTamanhoTela(){
  if (this.carouselImages = window.innerWidth <= 767) {
      const images: CarouselHome[] = [
        {
          imgSrc: '../../../assets/carousel/voce nao esta sozinha-responsiva.png',
          imgAlt: 'Você não está sozinha',
          title: 'Você não está sozinha!',
          subtitle: 'Conte com atendimento emergencial gratuito com psicólogas voluntárias e especializadas em luto parental.'
        },
        {
          imgSrc: '../../../assets/carousel/mae natimorto-responsiva.png',
          imgAlt: 'Mãe de natimorto deve ter direitos',
          title: 'Mãe de natimorto deve ter direito a ala separada na maternidade.',
          subtitle: 'Mães de natimortos tem direito a acomodação em ala ou leitos separados das demais gestantes.'
        }
      ]
    }
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
