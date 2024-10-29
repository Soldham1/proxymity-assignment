import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserListComponent } from '../user-list/user-list.component';
import { MatCard } from '@angular/material/card';
import { UserDataService } from '../user-data.service';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatToolbarModule, MatCard, MatButtonModule, UserListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(
    protected readonly userDataService: UserDataService,
    private readonly dialog: MatDialog
  ) {}

  openUserForm() {
    this.dialog.open(UserFormComponent);
    //this.userDataService.addUser({});
  }
}
