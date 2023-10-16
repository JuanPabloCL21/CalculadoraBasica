import { Component, Input} from '@angular/core';
import { ResultadoService } from '../resultado.service';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {

  @Input() num1: number;
  @Input() num2: number;

  constructor(private resultadoService: ResultadoService) {}

  calcularSuma() {
    const resultado = this.num1 + this.num2;
    this.resultadoService.setResultado(resultado);
  }

}
