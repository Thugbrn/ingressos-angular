import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})

export class ContactInfoComponent {
  contactInfos

  constructor() {
    this.contactInfos = [
      {
        nomeIcone: "place",
        titulo: "Endereço",
        texto: "Rua: Bento dos Reis, 125 Jardim Bonifacio, São Paulo - SP, 08253-600"
      },
      {
        nomeIcone: "phone",
        titulo: "Telefone",
        texto: "(11) 95054-3863"
      },
      {
        nomeIcone: "email",
        titulo: "Email",
        texto: "thugbrn@gmail.com"
      },
    ];
  }
}
