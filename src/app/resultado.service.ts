import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  private resultado: number = 0;

  setResultado(resultado: number){
    this.resultado = resultado;
  }

  getResultado(){
    return this.resultado;
  }

  constructor() { }
}
