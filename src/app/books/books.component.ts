import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  searchTitle: string = '';
  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe((data: any) => {
      this.books = data.items || [];
    });
  }

  onSearch(): void {
    this.bookService.searchBooks(this.searchTitle).subscribe((data: any) => {
      this.books = data.items || [];
    });
  }

  viewBookDetails(bookId: string): void {
    this.router.navigate(['/book', bookId]);
  }
}
