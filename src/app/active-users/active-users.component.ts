import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersServiceService } from '../Services/users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[] = this.usersService.activeUsers;

  constructor(private usersService: UsersServiceService) {

  }

  onSetToInactive(id: number) {
    return this.usersService.addToInactiveUsers(id)
  }
}
