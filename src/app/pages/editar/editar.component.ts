import { Component, OnInit } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookListar } from '../../models/Book';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormComponent, CommonModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{

  btnAcao = "Editar";
  descTitle = "Editar Livro";
  book!: BookListar;

constructor(private bookService: BookService, private router: Router, private route: ActivatedRoute){}

ngOnInit(){
  console.log(1)
   const id = String(this.route.snapshot.paramMap.get('id'))

   this.bookService.GetBookId(id).subscribe(response => {
    console.log(2)
    this.book = response.dados;
   });
}

editBook(book: BookListar) {
  const id = this.route.snapshot.paramMap.get('id'); // Obtém o ID da rota

  if (!id) {
    console.error("ID não encontrado na rota!");
    return;
  }

  console.log("Enviando PUT para:", `${this.bookService.ApiUrl}/${id}`);
  console.log("Dados enviados:", book);

  this.bookService.UpdateBook(id, book).subscribe({
    next: () => {
      this.router.navigate(['/']);
    },
    error: (err) => {
      console.error("Erro na requisição:", err);
    }
  });
}


}





