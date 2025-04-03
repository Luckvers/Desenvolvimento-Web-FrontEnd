import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  email: string = '';
  BemVindo: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get('email') || '';
    
    const UsuárioLogado = sessionStorage.getItem('UsuárioLogado');
    
    if (!UsuárioLogado || UsuárioLogado !== this.email) {
      this.router.navigate(['/login']);
    } else {
      this.BemVindo = `Bem-vindo, ${this.email}`;
    }
  }

  logout() {
    sessionStorage.removeItem('UsuárioLogado');
    this.router.navigate(['/login']);
  }
}
