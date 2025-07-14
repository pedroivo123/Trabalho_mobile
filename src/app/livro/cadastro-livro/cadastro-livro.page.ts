import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.page.html',
  styleUrls: ['./cadastro-livro.page.scss'],
  standalone: false
})

export class CadastroLivroPage {
  livro = { 
    nome: '',
    autor: '',
    isbn: '',
    anoPublicacao: null,
    genero: '',
    preco: null
}

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) {}

    salvarLivro() {
    this.navCtrl.navigateForward('/lista-livro', {
      state: {
      livro: this.livro
      }
    });
  }

}
