import { Injectable } from "@angular/core";
import { ReplaySubject, Observable } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  currentUser = new ReplaySubject<User>(null);

  constructor() {}

  setCurrentUser(user: User) {
    this.currentUser.next(user);
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser;
  }
}
