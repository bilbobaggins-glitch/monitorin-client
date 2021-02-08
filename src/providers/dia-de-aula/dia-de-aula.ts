import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DiaDeAula } from '../../classescustom/modelo/DiaDeAula';
import { Turma } from '../../classescustom/modelo/Turma';

/*
  Generated class for the DiaDeAulaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DiaDeAulaProvider {
  diaDeAulas: Array<DiaDeAula> = new Array<DiaDeAula>();

  constructor() {

  }

  inserir(diaDeAula: DiaDeAula){
    this.diaDeAulas.push(diaDeAula);
  }

  getAll(): Array<DiaDeAula>{
    return this.diaDeAulas;
  }

  inserirMult(turma: Turma): void{
    let dataTemp = new Date();
    let diaDaSemana;
    let diaDaSemanaTurma;
    let diaDeAulaTemp;

    for(let i = 0; dataTemp.valueOf() < turma.dataFinal.valueOf(); i++){
      dataTemp = new Date();
      dataTemp.setDate(dataTemp.getDate() + i);

      diaDaSemana = dataTemp.getDay();

      if(diaDaSemana != 0 && diaDaSemana != 6){

        diaDaSemanaTurma = diaDaSemana - 1;

        if(turma.semanaDias[diaDaSemanaTurma].valor == true){

          diaDeAulaTemp = new DiaDeAula();
          diaDeAulaTemp.turma = turma;
          diaDeAulaTemp.data = dataTemp;
          this.diaDeAulas.push(diaDeAulaTemp);

        }
      }
    }
  }

  getDiaDeAulaByTurma(turma: Turma): Array<DiaDeAula>{
    let diaDeAulasFiltrados: Array<DiaDeAula> = new Array<DiaDeAula>();

    for(let diaDeAulaIter of this.diaDeAulas){
      if(diaDeAulaIter.turma == turma){
        diaDeAulasFiltrados.push(diaDeAulaIter);
      }
    }

    return diaDeAulasFiltrados;
  }

}
