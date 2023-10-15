import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComentariosComponent } from 'src/app/components/section-comentarios/section-comentarios.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule, SectionComentariosComponent, HeaderComponent],
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {

}
