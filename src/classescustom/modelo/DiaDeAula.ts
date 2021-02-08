import { Turma } from "./Turma";
import { TabHighlight } from "ionic-angular";

export class DiaDeAula{
    data: Date = null;

    turma: Turma = null;
    estudantes: Array<Turma> = new Array<Turma>();
}