import { Injectable } from '@angular/core';
import { User } from './model';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  userData: User[] = [];

  constructor() {}
}
