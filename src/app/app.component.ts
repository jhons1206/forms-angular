import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = '061 formIntro';
  // title = '062 formValores';
  title = '063 formEstado';

  codigo: string = '';
  nombre: string = '';
  edad: number = 20;
  opcion: string = 'Uno';
  sexo: string = 'Hombre';
  comentarios: string = '';
  activar: boolean = true;

  mostrarVar() {
    console.log(
      'Codigo (' + this.codigo + ')'
      + 'Nombre (' + this.nombre + ')'
      + 'Edad (' + this.edad + ')'
      + 'Opcion (' + this.opcion + ')'
      + 'Sexo (' + this.sexo + ')'
      + 'Comentarios (' + this.comentarios + ')'
      + 'Activar (' + this.activar + ')'
    );
  }

  onSubmit() {
    console.log('Submit form');
  }
}
