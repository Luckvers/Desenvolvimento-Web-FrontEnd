import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculadorade-imc',
  imports: [FormsModule],
  templateUrl: './calculadorade-imc.component.html',
  styleUrl: './calculadorade-imc.component.css'
})
export class CalculadoradeIMCComponent {
peso: number = 0;
altura: number = 0;
imc: number = 0;
classificacao: String = '';
calcularIMC(){
this.imc = this.peso / (this.altura* this.altura);
this.classificacao = this.determinarClassificacao(this.imc);
}

determinarClassificacao(imc: number): string {
  if (imc < 18.5) {
    return 'Abaixo do peso';
  } else if (imc >= 18.5 && imc <= 24.9) {
    return 'Peso normal';
  } else if (imc >= 25 && imc <= 29.9) {
    return 'Sobrepeso';
  } else if (imc >= 30 && imc <= 34.9) {
    return 'Obesidade grau I';
  } else if (imc >= 35 && imc <= 39.9) {
    return 'Obesidade grau II';
  } else {
    return 'Obesidade grau III';
  }
}
}
