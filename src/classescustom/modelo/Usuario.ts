import { EstudanteAtividade } from "./EstudanteAtividade";
import { EstudanteTurma } from "./EstudanteTurma";
import { DiaDeAula } from "./DiaDeAula";
import { Turma } from "./Turma";

export class Usuario{
    //Primary key
    id: number = undefined;

    //Properties
    nome: string = undefined;
    sobrenome: string = undefined;
    rg: string = undefined;
    usuario: string = undefined;
    senha: string = undefined;
    professor: boolean;

    //OneToMany
    estudanteAtividades: Array<EstudanteAtividade> = new Array<EstudanteAtividade>();
    estudanteTurmas: Array<EstudanteTurma> = new Array<EstudanteTurma>();
    diaDeAulas: Array<DiaDeAula> = new Array<DiaDeAula>();
    turmas: Array<Turma> = new Array<Turma>();

    constructor(){
    }
}