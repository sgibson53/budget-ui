import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Account } from "../models/account.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>("http://localhost:3000/api/accounts");
  }

  updateAccount(account: Account): Observable<Account> {
    return this.http.put<Account>(
      `http://localhost:3000/api/edit-account/${account._id}`,
      account
    );
  }

  addAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(
      "http://localhost:3000/api/new-account",
      account
    );
  }

  deleteAccount(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/delete-account/${id}`);
  }
}
