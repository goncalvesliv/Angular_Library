import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.development'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookListar } from '../models/Book';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class BookService{
   
  ApiUrl = environment.UrlApi;

  constructor(private http : HttpClient) { }

  GetBooks(): Observable<Response<BookListar[]>>{
    return this.http.get<Response<BookListar[]>>(this.ApiUrl)
  }

  DeletarBook(id:number): Observable<Response<BookListar[]>>{
    return this.http.delete<Response<BookListar[]>>(`${this.ApiUrl}?bookId=${id}`);
  }

  CreatBook(book: BookListar) : Observable<Response<BookListar[]>>{
    return this.http.post<Response<BookListar[]>>(this.ApiUrl,book)
  }

  GetBookId(id:number) : Observable<Response<BookListar>>{
    return this.http.get<Response<BookListar>>(`${this.ApiUrl}/${id}`);
  }

  UpdateBook(book: BookListar): Observable<Response<BookListar>> {
    return this.http.put<Response<BookListar>>(`${this.ApiUrl}/${book.id}`, book);
}

  
}
 