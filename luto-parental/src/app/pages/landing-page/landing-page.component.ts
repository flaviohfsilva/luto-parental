import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/core/request.service';
import { CarouselHome, Historia, Noticia, Tag } from 'src/app/interfaces';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  selectedIndex = 0;
  sliders = true;
  controls = true;
  carouselImages = false;
  carouselAutomatic = true;
  textCarousel = true;
  historias: Historia[] = [];
  noticiasId: Noticia[] = [];
  tag: Tag[] = [];
  noticia: Noticia[] = [];
  title = '';
  markTitle = '';
  descricao = '';

  constructor(
    private requestService: RequestService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.verificarTamanhoTela();
    this.mostrarHistorias();
    this.mostrarNoticias();
    this.mostrarTags();

    if(this.carouselAutomatic){
      this.carouselAutomatico();
    }
  }

  @HostListener('window:resize', ['$event'])
  // Verifica o tamanho da tela
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  verTamanho(event: Event){
    this.verificarTamanhoTela();
  }

  //
  images: CarouselHome[] = [
      {
        id: '0',
        imgSrc: '../../../assets/carousel/voce-nao-esta-sozinha.png',
        imgAlt: 'Você não está sozinha',
        title: 'Você não está sozinha! Torne mais leve a dor do luto.',
        rota: 'depoimentos',
        subtitle: 'Conte com o nosso espaço acolhedor e busque apoio em nosso mural de histórias.'
    },
    {
      id: '11',
      imgSrc: '../../../assets/carousel/tragedia-rs.png',
      imgAlt: 'Tragédia Rio Grande do Sul',
      title: 'Ajude as famílias atingidas pelas enchentes no Rio Grande do Sul.',
      subtitle: 'Diante da maior catástrofe climática na história do estado do Rio Grande do Sul, estamos mobilizados para ajudar mães e famílias que estejam desalojados ou necessitando de atendimento, medicamentos e equipamentos em casa ou em abrigos'
    },
    {
      id: '9',
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
  // eslint-disable-next-line no-cond-assign
  if (this.carouselImages = window.innerWidth <= 767) {
      const images: CarouselHome[] = [
        {
          id: '0',
          imgSrc: '../../../assets/carousel/voce nao esta sozinha-responsiva.png',
          imgAlt: 'Você não está sozinha',
          title: 'Você não está sozinha!',
          subtitle: 'Conte com atendimento emergencial gratuito com psicólogas voluntárias e especializadas em luto parental.'
        },
        {
          id: '9',
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

  mostrarTags(){
    this.requestService.buscarTags().subscribe(
      (tags) => {
        this.tag = tags;
        console.log('Tags: ', this.tag);
      },
      (error) => {
        console.log('Erro: ', error)
      }
    );
  }

  mostrarNoticias(){
    this.requestService.buscarNoticias().subscribe(
      (noticias) => {
        this.noticia = noticias;
        console.log('Notícias', this.noticia)
      },
      (error) => {
        console.log( 'Erro ao mostrar notícias', error)
      }
    )
  }

  selecionarInformacao(id: string){
    console.log('Chegou no selecionarInformacao', id);

    if(id == '0'){
      console.log('Não vai para a página selecionada');
      return
    }

    this.requestService.buscarNoticiasPorId(id).subscribe(
      (noticia) => {
        console.log('Busca da notícia por Id: ', noticia);

        this.router.navigate(['noticia-selecionada/'], {
          queryParams: {
            id: noticia.id,
            idTipoInformacao: noticia.idTipoInformacao,
            titulo: noticia.titulo,
            texto: noticia.texto,
            data: noticia.dataHora,
            rotaNome: 'Notícias',
            secaoAtiva: 'noticias',
            img: noticia.img,
            title: 'Quadro de',
            markTitle: 'notícias',
            descricao: 'Acompanhe sobre as últimas notícias sobre o luto parental, artigos, leis de apoio aos pais  aos pais enlutados e muito mais.',
          }
        })
      },
      (error) => {
        console.log('Erro ao buscar notícia por id', error)
      }
    )
  }

  selecionarDepoimento(id: number, idTipoInformacao:number, titulo: string | null, texto: string, data: string| Date, img?:string){
    console.log('Chegou no selecionarInformacao', id, titulo, texto, data, img);

    this.title = 'Mural de';
    this.markTitle = 'histórias';
    this.descricao = 'Você não está sozinho(a). Receba e ofereça apoio na companhia de outros cuidadores que compreendem a sua dor.';

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
        title: this.title,
        markTitle: this.markTitle,
        descricao: this.descricao,
      }
    })
  }


}
