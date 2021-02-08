import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstudanteTurma } from '../../classescustom/modelo/EstudanteTurma';

/*
  Generated class for the EstudanteTurmaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EstudanteTurmaProvider {
  estudanteTurmas: Array<EstudanteTurma> = new Array<EstudanteTurma>();

  constructor() {
    
  }
}
