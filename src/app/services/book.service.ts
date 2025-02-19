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
}
