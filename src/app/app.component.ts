import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { BindeosComponent } from "./components/bindeos/bindeos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, LoginComponent, BindeosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "proyecto-nuevo"

  edadUno: number = 0;

  EdadDos: number = 0;

  promedio: number = 0;

  suma: number = 0;

  calcular()
  {
    this.edadUno = Number(this.edadUno);
    this.EdadDos = Number(this.EdadDos);

    this.promedio = (this.edadUno + this.EdadDos) / 2;

    this.suma = this.edadUno + this.EdadDos;
  }

  limpiarCuadrosDeTexto()
  {
    this.edadUno = 0;
    this.EdadDos = 0;
    this.promedio = 0;
    this.suma = 0;
  }
}
