import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-redes-sociais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './redes-sociais.component.html',
  styleUrls: ['./redes-sociais.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RedesSociaisComponent {
  RedesSociais

  constructor() {
    this.RedesSociais = [
      {
        classe: 'instagram',
        nomeIcone: 'logo-instagram',
        texto: 'Instagram',
      },
      {
        classe: 'whatsapp',
        nomeIcone: 'logo-whatsapp',
        texto: 'Whatsapp',
      },
      {
        classe: 'facebook',
        nomeIcone: 'logo-facebook',
        texto: 'Facebook',
      },
      {
        classe: 'twitter',
        nomeIcone: 'logo-twitter',
        texto: 'Twitter',
      }
    ]
  }
}
