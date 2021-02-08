import { DiaDeAula } from "./DiaDeAula";
import { Atividade } from "./Atividade";
import { Usuario } from "./Usuario";

export class Turma{
    id: number;

    disciplinaNome: string = '';
    dataInicial: Date = new Date();
    dataFinal: Date = new Date();
    semanaDias: Array<{nome: string, valor: boolean}> = [{nome: "Segunda", valor: false},
                                                           {nome: "Terça", valor: false},
                                                           {nome: "Quarta", valor: false},
                                                           {nome: "Quinta", valor: false},
                                                           {nome: "Sexta", valor: false}];
    notaFinalMinima: number = 0.0;
    frequenciaMinima: number = 0.0;
    
    //ManyToOne
    professor: Usuario;
    
    //OneToMany
    estudantes: Array<Usuario> = new Array<Usuario>();

}