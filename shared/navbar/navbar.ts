import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navbar', // Note: Use <navbar></navbar> in your app.component.html
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'], // Link your elegant pink styles
  imports: [RouterModule]
})
export class Navbar {}
