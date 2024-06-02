import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book, BookSearchResult } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private API_URL = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<BookSearchResult> {
    return this.http.get<BookSearchResult>(this.API_URL);
  }

  searchBooks(title: string): Observable<BookSearchResult> {
    const params = {
      q: title,
      maxResults: '10',
      printType: 'books'
    };
    return this.http.get<BookSearchResult>(this.API_URL, { params });
  }

  getBookById(id: string): Observable<Book> {
    const url = `${this.API_URL}/${id}`;
    return this.http.get<Book>(url);
  }
}
