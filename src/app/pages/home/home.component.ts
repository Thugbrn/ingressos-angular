import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent, CommonModule],
  selector: 'app-home,',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
