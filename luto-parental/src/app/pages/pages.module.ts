import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageRoutingModule } from './pages-routing-module';
import { FooterModule } from "../components/footer/footer.module";
import { NavbarModule } from '../components/navbar/navbar.module';
import { NewslatterModule } from '../components/newslatter/newslatter.module';
import { CompartilharHistoriaComponent } from '../components/compartilhar-historia/compartilhar-historia.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DireitosComponent } from './direitos/direitos.component';
import { AssistenciasComponent } from './assistencias/assistencias.component';
import { PlantoesPsicologicosComponent } from './plantoes-psicologicos/plantoes-psicologicos.component';



@NgModule({
    declarations: [
        LandingPageComponent,
        CompartilharHistoriaComponent,
        DepoimentosComponent,
        NoticiasComponent,
        DireitosComponent,
        AssistenciasComponent,
        PlantoesPsicologicosComponent
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        NavbarModule,
        FooterModule,
        NewslatterModule
    ]
})
export class PagesModule { }
