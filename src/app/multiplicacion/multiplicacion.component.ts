import { Component, Input} from '@angular/core';
import { ResultadoService } from '../resultado.service';

@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css']
})
export class MultiplicacionComponent {

  @Input() num1: number;
  @Input() num2: number;

  constructor(private resultadoService: ResultadoService) {}

  calcularmultiplicacion() {
    const resultado = this.num1 * this.num2;
    this.resultadoService.setResultado(resultado);
  }

}
