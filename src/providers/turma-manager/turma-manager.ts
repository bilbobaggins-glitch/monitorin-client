import { Injectable } from '@angular/core';
import { DiaDeAula } from '../../classescustom/modelo/DiaDeAula';
import { Turma } from '../../classescustom/modelo/Turma';

@Injectable()
export class TurmaManagerProvider {
  turmas: Array<Turma> = new Array<Turma>();
}