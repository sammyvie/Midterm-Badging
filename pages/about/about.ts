import { Component } from '@angular/core';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrls: ['./about.css'], // Added this line
  imports: [CommonModule, DatePipe, UpperCasePipe]
})
export class About {
  today = new Date();
}
