import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user: User): Observable<User> {
    return this.http.post<User>("http://localhost:3000/api/signin", user);
  }

  register(user: User): Observable<any> {
    return this.http.post("http://localhost:3000/api/signup", user);
  }
}
