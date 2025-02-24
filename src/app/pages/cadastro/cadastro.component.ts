import { Component } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";
import { BookListar } from '../../models/Book';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [FormComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  btnAcao= "Cadastrar"
  descTitle= "Cadastrar Livro"

  constructor(private bookService: BookService, private router: Router){}

  createBook(book : BookListar){
    this.bookService.CreatBook(book).subscribe(response => {
      this.router.navigate(['/'])
    })
  }

} 
