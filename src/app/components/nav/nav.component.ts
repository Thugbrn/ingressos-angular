import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LinksMenu } from 'src/app/links-menu';

@Component({
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  linksNavegacao: LinksMenu[];

  constructor() {
    this.linksNavegacao = [
      {
        rota: "/",
        texto: "Home"
      },
      {
        rota: "/contatos",
        texto: "Contatos"
      },
      {
        rota: "/fotos",
        texto: "Fotos"
      },
      {
        rota: "/comentarios",
        texto: "Comentários"
      },
    ];
  }
}
