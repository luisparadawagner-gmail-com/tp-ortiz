import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-persona',
  templateUrl: './persona.component.html',
})
export class PersonaComponent {
  personaForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    dni: new FormControl(''),
    edad: new FormControl(''),
    fechaNacimiento: new FormControl(''),
  });

  guardarPersona() {
    debugger;
    this.personaForm.value;
    console.warn(this.personaForm.value);
  }
}
