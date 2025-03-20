import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-conversorde-temperatura',
  imports: [FormsModule],
  templateUrl: './conversorde-temperatura.component.html',
  styleUrl: './conversorde-temperatura.component.css'
})
export class ConversordeTemperaturaComponent {
celsius: number = 0;
fahrenheit: number = 0;
kelvin: number = 0;

converterTemperatura(){
  this.fahrenheit = (this.celsius*9/5) + 32;
  this.kelvin = this.celsius + 273.15;
}
  
}

