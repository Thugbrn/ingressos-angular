import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
