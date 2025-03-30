import { Component, OnInit } from '@angular/core';
import { BookListar } from '../../models/Book';
import { BookService } from '../../services/book.service'
import { response } from 'express';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  book: BookListar[] = [];
  booksGeral: BookListar[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {

    this.bookService.GetBooks().subscribe(response => {
      this.book = response.dados;
      this.booksGeral = response.dados;

    })

  }

  search(event:Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.book = this.booksGeral.filter(book => {
      return book.title.toLowerCase().includes(value);
    })
  }

  deletar(id:number){
    this.bookService.DeletarBook(id).subscribe(response => {
      window.location.reload();
    })
  }
  

}