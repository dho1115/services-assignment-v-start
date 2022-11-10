import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersServiceService } from '../Services/users-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})

export class InactiveUsersComponent {
  users: string[] = this.usersService.inactiveUsers;

  constructor(private usersService: UsersServiceService) {

  }

  onSetToActive(id: number) {
    return this.usersService.addToActiveUsers(id)
  }
}
