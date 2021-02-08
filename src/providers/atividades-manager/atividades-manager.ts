import { Injectable } from '@angular/core';
import { Atividade } from '../../classescustom/modelo/Atividade';
import { Turma } from '../../classescustom/modelo/Turma';

@Injectable()
export class AtividadesManagerProvider {
  atividades: Array<Atividade> = new Array<Atividade>();
  atividadeSelecionada: Atividade = null;

  constructor() {
  }

  inserirAtividade(atividade){
    this.atividades.push(atividade);
  }

  inserirAtividades(atividades: Array<Atividade>){
    for(let atividade of atividades){
      this.atividades.push(atividade);
    }
  }

  getAtividadeByTurma(turma: Turma){
    let atividadesByTurma: Array<Atividade> = new Array<Atividade>();
    for(let atividade of this.atividades){
      if(atividade.turma = turma){
        atividadesByTurma.push(atividade);
      }
    }
    return atividadesByTurma;
  }

  getAtividade(posicao: number){
    return this.atividades[posicao];
  }
}
