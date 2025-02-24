import { Component, OnInit, Output, Input } from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { BookListar } from '../../models/Book';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css' 
})

export class FormComponent implements OnInit {
  @Input() btnAcao!:string;
  @Input() descTitle!: string;
  @Input() dadosBook : BookListar | null = null
  @Output() onSubmit = new EventEmitter<BookListar>();


bookForm!:FormGroup;

  ngOnInit(): void {

    console.log(3)

     this.bookForm = new FormGroup({
      id: new FormControl(this.dadosBook ? this.dadosBook.id : 0),
      title: new FormControl(this.dadosBook ? this.dadosBook.title : ''),
      author: new FormControl(this.dadosBook ? this.dadosBook.author :''),
      year: new FormControl(this.dadosBook ? this.dadosBook.year : 0),
      available: new FormControl(this.dadosBook ? this.dadosBook.available.toString() : false),
    
     })
  }

  submit(){ 
    console.log(FormGroup); 
    this.onSubmit.emit(this.bookForm.value);
  }

}
