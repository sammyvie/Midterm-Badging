import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'], // Critical for the design to reflect
  imports: [CommonModule, FormsModule, UpperCasePipe, TruncatePipe]
})
export class Contact {
  form = {
    name: 'Samantha Wayne D. Gonzales',
    email: 'samanthagonzales1003@gmail.com',
    message: 'samifiedesign'
  };
}
