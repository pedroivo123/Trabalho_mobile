import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-livro',
  templateUrl: './lista-livro.page.html',
  styleUrls: ['./lista-livro.page.scss'],
  standalone: false
})
export class ListaLivroPage implements OnInit {
  livro: any;

  constructor(private router: Router) { 
    
    const state = this.router.getCurrentNavigation()?.extras?.state;
    if (state) {
      this.livro = state['livro'];
  }
}

  ngOnInit() {
  }

}
