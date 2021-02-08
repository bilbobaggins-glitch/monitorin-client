import { Turma } from "./Turma";
import { TabHighlight } from "ionic-angular";
import { EstudanteAtividade } from "./EstudanteAtividade";

export class Atividade{
    //Primary key
    id: number;
    
    //Properties
    nome: string = '';
    peso: number = undefined;
    dataEntrega: Date = null;

    //ManyToOne
    turma: Turma = null;
    
    //OneToMany
    estudanteAtividades: Array<EstudanteAtividade> = new Array<EstudanteAtividade>();
}