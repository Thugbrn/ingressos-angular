import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { SectionContatoComponent } from './components/section-contato/section-contato.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import { MainFotosComponent } from './components/main-fotos/main-fotos.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    ContatoComponent,
    SectionContatoComponent,
    ContactInfoComponent,
    FotosComponent,
    MainFotosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
