import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-livro',
  templateUrl: './lista-livro.page.html',
  styleUrls: ['./lista-livro.page.scss'],
  standalone: false
})
export class ListaLivroPage {
  livros: any[] = [];

  constructor(private router: Router) {}

  ionViewWillEnter() {
    this.carregarLivros();
  }

  carregarLivros() {
    const data = localStorage.getItem('livros');
    this.livros = data ? JSON.parse(data) : [];
  }

  excluirLivro(index: number) {
    this.livros.splice(index, 1);
    localStorage.setItem('livros', JSON.stringify(this.livros));
  }

  editarLivro(index: number) {
    const livro = this.livros[index];
    this.router.navigateByUrl('/cadastro-livro', {
      state: {
        livro,
        index
      }
    });
  }
}
