import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-apolicede-seguro',
  imports: [FormsModule],
  templateUrl: './apolicede-seguro.component.html',
  styleUrl: './apolicede-seguro.component.css'
})
export class ApolicedeSeguroComponent {
nome: String = '';
sexo: String = '';
idade: number = 0;
valorAutomovel: number = 0;
valorApolice: number = 0;

calcularApolice(){
if(this.sexo === 'masculino'){
  if(this.idade <= 25){
    this.valorApolice = this.valorAutomovel * 0.15;
  } else {
    this.valorApolice = this.valorAutomovel * 0.10;
  }
} else if (this.sexo === 'feminino') {
  this.valorApolice = this.valorAutomovel * 0.08;

}
}
}