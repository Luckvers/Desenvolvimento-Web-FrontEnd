import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../services/localstorage.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media-simples',
  imports: [FormsModule,CommonModule  ],
  templateUrl: './media-simples.component.html',
  styleUrl: './media-simples.component.css'
})
export class MediaSimplxesComponent implements OnInit{
Nota1: number = 0
Nota2: number = 0;
Nota3: number = 0;
Nota4: number = 0;
media : number = 0;
situacao: String = "";
ultimaMedia: any = null;

constructor(private servico: StorageService) { }

ngOnInit(): void {
  this.ultimaMedia = this.servico.getLocal('ultimaMedia');
}

Calcular (){
  this.media = (this.Nota1 + this.Nota2 + this.Nota3 + this.Nota4) / 4;

 if(this.media >= 6) {
  this.situacao = "Aprovado!";
 }else{
  this.situacao = "Reprovado!";
  
  let dados = {
    Nota1: this.Nota1,
    Nota2: this.Nota2,
    Nota3: this.Nota3,
    Nota4: this.Nota4,
    media: this.media,
    situacao: this.situacao
  };
  this.servico.setLocal('ultimaMedia', dados);
 }
}
  
}


