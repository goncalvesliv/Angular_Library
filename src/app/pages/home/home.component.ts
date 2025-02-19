import { Component, OnInit } from '@angular/core';
import { BookListar } from '../../models/Book';
import { BookService } from '../../services/book.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  books: BookListar[] = [];
  booksGeral: BookListar[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {

    this.bookService.GetBooks().subscribe(response => {
      this.books = response.dados;
      this.booksGeral = response.dados;
      console.log(response);

    })

  }

}