import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DadosLivro } from 'src/app/modelo/DadosLivro.model';

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.page.html',
  styleUrls: ['./cadastro-livro.page.scss'],
  standalone: false
})
export class CadastroLivroPage implements OnInit {

  dadosLivroForm: any;
  dadosLivro: DadosLivro | undefined;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dadosLivroForm = this.formBuilder.group({
      id: [this.dadosLivro?.id],
      nome: [this.dadosLivro?.nome, Validators.required],
      autor: [this.dadosLivro?.autor, Validators.required],
      isbn: [this.dadosLivro?.isbn, Validators.required],
      ano_publi: [this.dadosLivro?.ano_publi, Validators.required],
      genero: [this.dadosLivro?.genero, Validators.required],
      preco: [this.dadosLivro?.preco, Validators.required]
    })
  }

}
