import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  imports: [CommonModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  produtos = [
    { id: 1, nome: 'Playstation 1', preco: 4500, descricao: 'Para quem gosta de Nostalgia!', emEstoque: true },
    { id: 2, nome: 'Playstation 2', preco: 150, descricao: 'O maior sucesso da Loja!', emEstoque: false },
    { id: 3, nome: 'Playstation 3', preco: 1200, descricao: 'Alta Tecnologia!', emEstoque: true } 
  ];

  constructor(private router: Router) {}

  comprar(id: number): void {
    this.router.navigate(['/produto-detalhe', id]);
  }
}
