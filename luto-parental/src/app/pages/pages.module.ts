import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageRoutingModule } from './pages-routing-module';
import { FooterModule } from "../components/footer/footer.module";
import { NavbarModule } from '../components/navbar/navbar.module';
import { NewslatterModule } from '../components/newslatter/newslatter.module';
import { CompartilharHistoriaComponent } from '../components/compartilhar-historia/compartilhar-historia.component';
import { VerNoticiasArtigosComponent } from '../components/ver-noticias-artigos/ver-noticias-artigos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DireitosComponent } from './direitos/direitos.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { VerDireitosComponent } from '../components/ver-direitos/ver-direitos.component';
import { ModalHistoriasModule } from '../components/modal-historias/modal-historia.module';
import { SobreComponent } from './sobre/sobre.component';
import { VerHistoriasComponent } from '../components/ver-historias/ver-historias.component';
import { ComoAjudarComponent } from './como-ajudar/como-ajudar.component';
import { LimitarPalavrasPipe } from './pipe/limitar-palavras.pipe';
import { NoticiaSelecionadaComponent } from './informacao-selecionada/noticia-selecionada.component';
import { OqueFazemosComponent } from './oque-fazemos/oque-fazemos.component';
import { ScrollTopComponent } from '../components/scroll-top/scroll-top.component';
import { ContatoComponent } from './contato/contato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MapaDepoimentosComponent } from '../components/mapa-depoimentos/mapa-depoimentos.component';





@NgModule({
    declarations: [
        LandingPageComponent,
        CompartilharHistoriaComponent,
        VerNoticiasArtigosComponent,
        VerDireitosComponent,
        VerHistoriasComponent,
        NoticiasComponent,
        DireitosComponent,
        DepoimentosComponent,
        SobreComponent,
        ComoAjudarComponent,
        LimitarPalavrasPipe,
        NoticiaSelecionadaComponent,
        OqueFazemosComponent,
        ScrollTopComponent,
        ContatoComponent,
        MapaDepoimentosComponent
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        NavbarModule,
        FooterModule,
        NewslatterModule,
        ModalHistoriasModule,
        ReactiveFormsModule,
        FormsModule,
        MatSnackBarModule
    ]
})
export class PagesModule { }
