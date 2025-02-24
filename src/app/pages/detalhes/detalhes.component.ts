import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BookListar } from '../../models/Book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit {

  book!: BookListar;

  constructor(private bookService: BookService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));

    this.bookService.GetBookId(id).subscribe(response => {
      this.book = response.dados;
    });
  }
}
