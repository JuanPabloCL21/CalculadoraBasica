import { Component, Input } from '@angular/core';
import { ResultadoService } from '../resultado.service';

@Component({
  selector: 'app-resta',
  templateUrl: './resta.component.html',
  styleUrls: ['./resta.component.css']
})
export class RestaComponent {

  @Input() num1: number;
  @Input() num2: number;

  constructor(private resultadoService: ResultadoService) {}

  calcularresta() {
    const resultado = this.num1 - this.num2;
    this.resultadoService.setResultado(resultado);
  }

}
