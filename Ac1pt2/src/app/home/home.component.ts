import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
showBanner: boolean = true;
urlImagem: String = "https://as1.ftcdn.net/v2/jpg/04/18/88/70/1000_F_418887085_G10W0Da9hwhexnsedbYO7MC0q22brWOy.jpg"

ngOnInit(): void {
  const storedValue = localStorage.getItem('showBanner');
  this.showBanner = storedValue === null ? true : JSON.parse(storedValue);
}

OcultarBanner(): void {
  this.showBanner = !this.showBanner;
  localStorage.setItem('showBanner', JSON.stringify(this.showBanner));
}
}