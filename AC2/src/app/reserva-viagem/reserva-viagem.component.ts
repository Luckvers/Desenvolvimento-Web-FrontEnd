import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva-viagem',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reserva-viagem.component.html',
  styleUrl: './reserva-viagem.component.css'
})
export class ReservaViagemComponent implements OnInit {

  reservaForm: FormGroup;
  destinos = ['Paris', 'Nova York', 'Tóquio', 'Rio de Janeiro'];

  constructor(private fb: FormBuilder) {
    this.reservaForm = this.fb.group({
      destino: ['', Validators.required],
      dataIda: ['', Validators.required],
      dataVolta: ['', Validators.required],
      passageiros: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      email: ['', [Validators.required, Validators.email]]
    }, { validators: this.dataVoltaDepoisDaIda });
  }

  ngOnInit() {
    const dadosSalvos = localStorage.getItem('formReserva');
    if (dadosSalvos) {
      this.reservaForm.setValue(JSON.parse(dadosSalvos));
    }

    this.reservaForm.valueChanges.subscribe(val => {
      localStorage.setItem('formReserva', JSON.stringify(val));
    });
  }

  dataVoltaDepoisDaIda(group: FormGroup) {
    const ida = new Date(group.get('dataIda')?.value);
    const volta = new Date(group.get('dataVolta')?.value);
    return volta > ida ? null : { dataInvalida: true };
  }

  onSubmit() {
    if (this.reservaForm.valid) {
      console.log(this.reservaForm.value);
      localStorage.removeItem('formReserva');
      this.reservaForm.reset();
    }
  }
}
