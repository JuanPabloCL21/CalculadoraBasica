import { Component, Input } from '@angular/core';
import { ResultadoService } from './resultado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1: number = 0;
  num2: number = 0;

  constructor(public resultadoService: ResultadoService) {}

  // No necesitas una función de cálculo aquí, ya que los cálculos se realizan en los componentes hijos.

  getResultado() {
    return this.resultadoService.getResultado();
  }
}
