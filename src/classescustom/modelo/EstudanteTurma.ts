import { Turma } from "./Turma";
import { Usuario } from "./Usuario";

export class EstudanteTurma{
    id: number;

    notaprevista: number = undefined;
    frequenciaprevista: number = undefined;
    situacao: string = undefined;

    turma: Turma = null;
    estudante: Usuario = null;
}