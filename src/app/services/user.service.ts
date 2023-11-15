import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = "/api/users";

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<user[]>(this.url);
  }

  // getUserById(id: number) {
  //   return this.http.get(this.url + '/' + id);
  // }

  addUser(user: user) {
    return this.http.post(this.url, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  updateUser(user: user) {
    return this.http.put(this.url + '/' + user.id, user);
  }
}

