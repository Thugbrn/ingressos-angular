import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from '../contact-info/contact-info.component';

@Component({
  standalone: true,
  imports: [RouterLink, RouterOutlet, ContactInfoComponent, CommonModule],
  selector: 'app-section-contato',
  templateUrl: './section-contato.component.html',
  styleUrls: ['./section-contato.component.css']
})
export class SectionContatoComponent {

}
