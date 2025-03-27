import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefas } from '../models/tarefas';

@Component({
  selector: 'app-lista-tarefas',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.css'
})
export class ListaTarefasComponent {
  statusTarefa: boolean = false;
  tarefas: Tarefas[] = [
    { descricao: 'Fazer AC1',  status: false },
    { descricao: 'Escrever Doucumentação Startup', status: true },
    { descricao: 'Gerar Gráfico de Pizza para a matéria Power BI  ', status: true },
    { descricao: 'Responder Quiz de Processos Ágeis', status: false },
    { descricao: 'Analisar Interface do Usuário (UI)', status: true }
  ]
}