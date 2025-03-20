import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calcular-media',
  imports: [FormsModule],
  templateUrl: './calcular-media.component.html',
  styleUrl: './calcular-media.component.css'
})
export class CalcularMediaComponent {
  AC1: number = 0
  AC2: number = 0;
  AG: number = 0;
  AF: number = 0;
  media : number = 0;
  situacao: String = "";
  Calcular (){
    this.media = ((this.AC1 * 0.15) + (this.AC2 * 0.30) + (this.AG * 0.10) + (this.AF * 0.45));
  
   if(this.media >= 5) {
    this.situacao = "Aprovado!";
   }else{
    this.situacao = "Reprovado!";
   }
  }
    
  }