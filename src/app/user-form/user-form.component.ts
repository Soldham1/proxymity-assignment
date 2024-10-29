import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { UserDataService } from '../user-data.service';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    ReactiveFormsModule,
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    street: new FormControl(''),
    city: new FormControl(''),
  });

  constructor(private readonly userDataService: UserDataService) {}

  onSubmit() {
    // add id
    this.userDataService.addUser(this.mapUserData());
  }

  private mapUserData() {
    const { name, username, email, street, city } = this.userForm.value;
    return {
      name,
      username,
      email,
      address: {
        street,
        city,
      },
      id: uuidv4(),
    } as User;
  }
}
