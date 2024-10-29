import { Component, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { User } from '../model';
import { UserDataService } from '../user-data.service';
import { MatButtonModule } from '@angular/material/button';
import { UserFormComponent } from '../user-form/user-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatCard, MatCardContent, MatButtonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user = input.required<User>();

  constructor(
    protected readonly userDataService: UserDataService,
    private readonly dialog: MatDialog
  ) {}

  deleteUser() {
    this.userDataService.deleteUser(this.user().id);
  }

  editUser() {
    const { name, username, email, address } = this.user();
    const componentRef = this.dialog.open(UserFormComponent);
    componentRef.componentInstance.addNew.set(false);
    componentRef.componentInstance.userForm.setValue({
      name,
      username,
      email,
      street: address.street,
      city: address.city,
    });
    componentRef.componentInstance.id.set(this.user().id);
  }
}
