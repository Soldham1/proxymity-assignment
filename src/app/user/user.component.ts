import { Component, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { User } from '../model';
import { UserDataService } from '../user-data.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatCard, MatCardContent, MatButtonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user = input.required<User>();

  constructor(protected readonly userDataService: UserDataService) {}

  deleteUser() {
    this.userDataService.deleteUser(this.user().id);
  }
}
