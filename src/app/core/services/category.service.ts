import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "../models/category.model";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>("http://localhost:3000/api/categories");
  }

  updateCategory(id: string, category: Category): Observable<Category> {
    return this.http.put<Category>(
      `http://localhost:3000/api/edit-category/${id}`,
      category
    );
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(
      "http://localhost:3000/api/new-category",
      category
    );
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/delete-category/${id}`);
  }
}
