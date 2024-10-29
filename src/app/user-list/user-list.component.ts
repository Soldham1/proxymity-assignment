import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { MatCardContent, MatCardHeader } from '@angular/material/card';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatCardHeader, MatCardContent, UserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  constructor(protected readonly userDataService: UserDataService) {}

  ngOnInit() {
    console.log(this.userDataService.userData);
  }
}
