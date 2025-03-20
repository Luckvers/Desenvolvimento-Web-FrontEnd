import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  num1: number = 0
  num2: number = 0
  resultado: number = 0
  soma() {
    this.resultado = this.num1 + this.num2
  }

  subtracao() {
    this.resultado = this.num1 - this.num2
  }
  multiplicacao() {
    this.resultado = this.num1 * this.num2
  }
  divicao() {
    this.resultado = this.num1 / this.num2
  }

}
