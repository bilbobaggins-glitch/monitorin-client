import { Injectable } from '@angular/core';
import { EstudanteAtividade } from '../../classescustom/modelo/EstudanteAtividade';
import { Atividade } from '../../classescustom/modelo/Atividade';
import { Turma } from '../../classescustom/modelo/Turma';

@Injectable()
export class EstudanteAtividadeManagerProvider {
  estudanteAtividades: Array<EstudanteAtividade> = new Array<EstudanteAtividade>();
  percentualMargem: number = 0.20;

}
