import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserListComponent } from '../user-list/user-list.component';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatToolbarModule, MatCard, UserListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
