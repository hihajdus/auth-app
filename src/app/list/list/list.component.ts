import { user } from './../../model/user';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(private userService: UserService) {
    this.getUsers();
  }

  users!: user[];
  user: user = {id: 0 , name: '', email: ''};

  private getUsers() {
    this.userService.getUsers().subscribe({
      next: (res) => {
        console.log(res);
        this.users = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addUser() {
    this.userService.addUser(this.user).subscribe({
      next: (res) => {
        this.users.push(this.user);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: (res) => {
        this.users = this.users.filter((user) => user.id !== id);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

    //   updateUser(id: number) {
    //   this.userService.updateUser(id, this.user).subscribe({
    //     next: (res) => {
    //       this.users = this.users.filter((user) => user.id !== user.id);
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //   });
    // }
}
