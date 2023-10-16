import { Component, Input } from '@angular/core';
import { ResultadoService } from '../resultado.service';


@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css'],
  
})
export class DivisionComponent {
  @Input() num1: number;
  @Input() num2: number;

  constructor(private resultadoService: ResultadoService) {}

  calcularDivision() {
    const resultado = this.num1 / this.num2;
    this.resultadoService.setResultado(resultado);
  }
  

}
