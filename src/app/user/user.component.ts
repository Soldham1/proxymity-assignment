import { Component, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { User } from '../model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatCard, MatCardContent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user = input.required<User>();
}
