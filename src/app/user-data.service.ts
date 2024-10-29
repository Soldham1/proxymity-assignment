import { Injectable } from '@angular/core';
import { User } from './model';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  userData: User[] = [];

  constructor() {}

  addUser(user: User) {
    this.userData = [...this.userData, user];
  }

  deleteUser(userIdToDelete: string) {
    this.userData = this.userData.filter((user) => user.id !== userIdToDelete);
  }
}
