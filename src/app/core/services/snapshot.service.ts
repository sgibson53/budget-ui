import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Snapshot } from "../models/snapshot.model";

@Injectable({
  providedIn: "root"
})
export class SnapshotService {
  constructor(private http: HttpClient) {}

  getSnapshots(user_id: string): Observable<Snapshot[]> {
    return this.http.get<Snapshot[]>(
      `http://localhost:3000/api/snapshots/${user_id}`
    );
  }

  addSnapshot(snapshot: Snapshot): Observable<Snapshot> {
    return this.http.post<Snapshot>(
      "http://localhost:3000/api/new-snapshot",
      snapshot
    );
  }
}
