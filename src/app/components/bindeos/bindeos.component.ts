import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { appConfig } from '../../app.config';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindeos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bindeos.component.html',
  styleUrl: './bindeos.component.css'
})
export class BindeosComponent {
  title: string = "primer-proyecto";
  nombre: string = "Gerardo";

  apellido: string = "";

  imagen: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/UTN_logo.jpg/270px-UTN_logo.jpg"

  mostrarDatos()
  {
    console.log(this.apellido)
  }
}
