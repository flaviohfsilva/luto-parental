import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageRoutingModule } from './pages-routing-module';
import { FooterModule } from "../components/footer/footer.module";
import { NavbarModule } from '../components/navbar/navbar.module';
import { NewslatterModule } from '../components/newslatter/newslatter.module';
import { CompartilharHistoriaComponent } from '../components/compartilhar-historia/compartilhar-historia.component';
import { VerNoticiasArtigosComponent } from '../components/ver-noticias-artigos/ver-noticias-artigos.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
    declarations: [
        LandingPageComponent,
        CompartilharHistoriaComponent,
        VerNoticiasArtigosComponent
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        ComponentsModule,
    ]
})
export class PagesModule { }
