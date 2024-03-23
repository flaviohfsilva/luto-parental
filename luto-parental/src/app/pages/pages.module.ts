import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageRoutingModule } from './pages-routing-module';
import { FooterModule } from "../components/footer/footer.module";
import { NavbarModule } from '../components/navbar/navbar.module';
import { NewslatterModule } from '../components/newslatter/newslatter.module';
import { CompartilharHistoriaComponent } from '../components/compartilhar-historia/compartilhar-historia.component';



@NgModule({
    declarations: [
        LandingPageComponent,
        CompartilharHistoriaComponent
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
