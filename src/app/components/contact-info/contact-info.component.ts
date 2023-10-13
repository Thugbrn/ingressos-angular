import { Component } from '@angular/core';
import { contatoInfos } from 'src/app/contato-infos';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})

export class ContactInfoComponent {
  contatoInfos: contatoInfos[];

  constructor() {
    this.contatoInfos = [
      {
        nomeIcone: "place",
        titulo: "Endereço",
        texto: "Rua: Bento dos Reis, 125 <br>Jardim Bonifacio, São Paulo - SP, <br>08253-600"
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
      {
        nomeIcone: "email",
        titulo: "Teste",
        texto: "teste@teste"
      },
    ];
  }
}