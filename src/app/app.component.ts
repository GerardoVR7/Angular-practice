import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = '';
  correo: string = '';

  onSubmit() {
    console.log('Nombre:', this.nombre);
    console.log('Correo:', this.correo);
  }
}