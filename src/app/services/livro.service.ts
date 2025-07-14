import { Injectable } from '@angular/core';

interface livro{
    id: number;
    nome: string;
    autor: string;
    ISBN: string;
    ano_publi: number;
    genero: string;
    preco: number;
}

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  
  constructor() { }
}
