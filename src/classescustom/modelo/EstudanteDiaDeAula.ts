import { Turma } from "./Turma";
import { TabHighlight } from "ionic-angular";
import { DiaDeAula } from "./DiaDeAula";
import { Usuario } from "./Usuario";

export class EstudanteDiaDeAula{
    presenca: boolean = false;

    diaDeAula: DiaDeAula = null;
    estudante: Usuario = null;
}