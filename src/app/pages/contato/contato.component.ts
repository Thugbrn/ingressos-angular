import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CommonModule } from '@angular/common';
import { SectionContatoComponent } from 'src/app/components/section-contato/section-contato.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, CommonModule, SectionContatoComponent],
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

}
