import { CounterService } from '../counter.service';
import { UserService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
    // this.userSetToInactive.emit(id);
  }
}
