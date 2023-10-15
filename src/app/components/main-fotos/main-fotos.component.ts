import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-fotos',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './main-fotos.component.html',
  styleUrls: ['./main-fotos.component.css']
})

export class MainFotosComponent {
  fotos: {
    img: string
  }[];

  imgPath = '../../../assets/img/';
  imgQtd = 14;

  constructor() {
    this.fotos = Array.from({ length: this.imgQtd }, (_, index) => ({
      img: `img${index + 1}.jpg`,
    }));
  }
}
