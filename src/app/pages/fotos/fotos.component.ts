import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFotosComponent } from 'src/app/components/main-fotos/main-fotos.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [CommonModule, MainFotosComponent, HeaderComponent],
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent {

}
