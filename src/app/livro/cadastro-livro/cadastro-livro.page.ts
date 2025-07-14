import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.page.html',
  styleUrls: ['./cadastro-livro.page.scss'],
  standalone: false
})
export class CadastroLivroPage implements OnInit {
  livro: any = {
    nome: '',
    autor: '',
    isbn: '',
    anoPublicacao: null,
    genero: '',
    preco: null
  };
  editando = false;
  editIndex: number | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const state = history.state;
    if (state && state.livro && state.index !== undefined) {
      this.livro = state.livro;
      this.editIndex = state.index;
      this.editando = true;
    }
  }

  salvarLivro() {
    const livros = JSON.parse(localStorage.getItem('livros') || '[]');

    if (this.editando && this.editIndex !== null) {
      livros[this.editIndex] = this.livro;
    } else {
      livros.push(this.livro);
    }

    localStorage.setItem('livros', JSON.stringify(livros));
    this.router.navigateByUrl('/lista-livro');
  }
}
