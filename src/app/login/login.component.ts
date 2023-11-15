import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from '../model/status';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private userService: UserService) {

  }

  status!: Status;

  onPost() {
    this.status = { statusCode: 0, message: 'post....' };
  }

  ngOnInit(): void {}
}
