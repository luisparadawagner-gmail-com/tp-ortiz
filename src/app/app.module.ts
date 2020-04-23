import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaAlumnosComponent } from './alta-alumnos/alta-alumnos.component';
import { PersonaComponent } from './formularios/reactivos/persona.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClubComponent } from './formularios/reactivos/club/club.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    AltaAlumnosComponent,
    PersonaComponent,
    ClubComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
