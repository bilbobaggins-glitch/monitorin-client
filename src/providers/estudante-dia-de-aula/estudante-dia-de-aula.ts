import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstudanteDiaDeAula } from '../../classescustom/modelo/EstudanteDiaDeAula';
import { Usuario } from '../../classescustom/modelo/Usuario';

@Injectable()
export class EstudanteDiaDeAulaProvider {
  estudanteDiaDeAulas: Array<EstudanteDiaDeAula> = new Array<EstudanteDiaDeAula>();

  constructor() {
    
  }

  inserir(estudanteDiaDeAula){
    this.estudanteDiaDeAulas.push(estudanteDiaDeAula);
  }

  getEstudanteDiaDeAulaByEstudante(estudante: Usuario): Array<EstudanteDiaDeAula>{
    let estudanteDiaDeAulaFiltrados: Array<EstudanteDiaDeAula> = new Array<EstudanteDiaDeAula>();

    for(let estudanteDiaDeAulaIter of this.estudanteDiaDeAulas){
      if(estudanteDiaDeAulaIter.estudante == estudante){
        estudanteDiaDeAulaFiltrados.push(estudanteDiaDeAulaIter);
      }
    }

    return estudanteDiaDeAulaFiltrados;
  }

}
