import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../models/pessoa';

@Component({
  selector: 'app-exemplo-diretivas',
  imports: [FormsModule, CommonModule],
  templateUrl: './exemplo-diretivas.component.html',
  styleUrl: './exemplo-diretivas.component.css'
})
export class ExemploDiretivasComponent {
  exibirTabela: boolean = true;
  nome: string = '';
  pessoas: Pessoa[] = [
{nome: 'Daniel', id: 1, cidade: 'Sorocaba', celular: '159953235'},  
{nome: 'Caetano', id: 2, cidade: 'Votorantim', celular: '159887543'},
{nome: 'Marcos', id: 3, cidade: 'Sorocaba', celular: '159954356'} ];
}
