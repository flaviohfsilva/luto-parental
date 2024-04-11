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
import { ModalHistoriasComponent } from '../components/modal-historias/modal-historias.component';
import { ModalHistoriasModule } from '../components/modal-historias/modal-historia.module';
import { VerHistoriasComponent } from '../components/ver-historias/ver-historias.component';




@NgModule({
    declarations: [
        LandingPageComponent,
        CompartilharHistoriaComponent,
        VerNoticiasArtigosComponent,
        VerDireitosComponent,
        VerHistoriasComponent,
        NoticiasComponent,
        DireitosComponent,
        DepoimentosComponent
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        NavbarModule,
        FooterModule,
        NewslatterModule,
        ModalHistoriasModule,
    ]
})
export class PagesModule { }
