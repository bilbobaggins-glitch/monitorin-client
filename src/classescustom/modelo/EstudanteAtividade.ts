import { Atividade } from "./Atividade";
import { Usuario } from "./Usuario";

export class EstudanteAtividade{
    nota: number = undefined;
    notaRecomendada: number = undefined;

    //ManyToOne
    atividade: Atividade;
    estudante: Usuario;
}