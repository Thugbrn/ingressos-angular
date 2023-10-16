import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RedesSociaisComponent } from '../redes-sociais/redes-sociais.component';

@Component({
  selector: 'app-section-comentarios',
  standalone: true,
  imports: [
    RouterLink, 
    RouterOutlet, 
    CommonModule, 
    RedesSociaisComponent 
  ],
  templateUrl: './section-comentarios.component.html',
  styleUrls: ['./section-comentarios.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SectionComentariosComponent {

}
