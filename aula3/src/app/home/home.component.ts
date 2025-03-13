import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  num1: number = 10;
  num2 = 20;
  urlImagem: String = "https://lncimg.lance.com.br/cdn-cgi/image/width=1080,quality=75,fit=pad,format=webp/uploads/2024/09/escudo-palmeiras-aspect-ratio-512-320.jpg"

  somar() {
    this.num2++;
  }
}
