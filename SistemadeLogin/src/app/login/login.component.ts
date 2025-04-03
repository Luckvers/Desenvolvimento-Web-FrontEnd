import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  login() {

    if (this.email === 'admin@exemplo.com') {
      sessionStorage.setItem('UsuárioLogado', this.email);
      
      this.router.navigate(['perfil', this.email]); 
    } 
  }
}

