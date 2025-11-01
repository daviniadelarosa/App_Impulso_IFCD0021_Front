import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./home.css'],
  imports: [CommonModule, RouterOutlet, RouterLinkWithHref],
  templateUrl: './home.html'
})
export class HomeComponent {}
