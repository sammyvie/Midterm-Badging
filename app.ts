import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `,
  imports: [Navbar, RouterModule]
})
export class App {}
