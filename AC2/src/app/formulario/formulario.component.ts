import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {
  form!: FormGroup;
  

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const saved = localStorage.getItem('inscricaoForm');
    this.form = this.fb.group({
      evento: [null, Validators.required],
      modalidade: [null, Validators.required],
      dataInicio: [null, Validators.required],
      dataFim: [null, Validators.required],
      participantes: this.fb.array([this.createParticipante()])
    });

    if (saved) this.form.setValue(JSON.parse(saved));

    this.form.valueChanges.subscribe(val => {
      localStorage.setItem('inscricaoForm', JSON.stringify(val));
    });
  }

  get participantes(): FormArray {
    return this.form.get('participantes') as FormArray;
  }

  createParticipante(): FormGroup {
    return this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.minLength(11),Validators.maxLength(11)]],
      ingresso: [null, Validators.required]
    });
  }

  addParticipante() {
    this.participantes.push(this.createParticipante());
  }

  removeParticipante(i: number) {
    this.participantes.removeAt(i);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      localStorage.removeItem('inscricaoForm');
      this.form.reset();
      this.participantes.clear();
      this.addParticipante();
    }
  }

  isDataValida(): boolean {
    const inicio = new Date(this.form.value.dataInicio);
    const fim = new Date(this.form.value.dataFim);
    return fim > inicio;
  }
}