import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validator,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
})
export class ClubComponent {
  constructor(private fb: FormBuilder) {}

  clubForm = this.fb.group({
    nombre: ['', Validators.required],
    fechaDeCreacion: [''],
    direccion: this.fb.group({
      calle: [''],
      numero: [''],
    }),
    jugadores: this.fb.array([this.fb.control('')]),
  });

  get jugadores() {
    return this.clubForm.get('jugadores') as FormArray;
  }

  agregarJugadores() {
    this.jugadores.push(this.fb.control(''));
  }

  submit() {
    debugger;
    this.clubForm.value();

    this.clubForm.setValue({
      nombre: '',
      fechaDeCreacion: '',
      direccion: {
        calle: '',
        numero: '',
      },
      jugadores: [''],
    });

    this.clubForm.patchValue({ edad: 35 });
  }
}
