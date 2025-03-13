import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-media-simples',
  imports: [FormsModule],
  templateUrl: './media-simples.component.html',
  styleUrl: './media-simples.component.css'
})
export class MediaSimplxesComponent {
Nota1: number = 0
Nota2: number = 0;
Nota3: number = 0;
Nota4: number = 0;
media : number = 0;
situacao: String = "";
Calcular (){
  this.media = (this.Nota1 + this.Nota2 + this.Nota3 + this.Nota4) / 4;

 if(this.media >= 6) {
  this.situacao = "Aprovado!";
 }else{
  this.situacao = "Reprovado!";
 }
}
  
}


