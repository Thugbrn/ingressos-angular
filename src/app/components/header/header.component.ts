import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

@Component({
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, NavComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
}
