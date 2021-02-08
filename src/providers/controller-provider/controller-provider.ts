import { Injectable } from '@angular/core';
import { TurmaManagerProvider } from '../turma-manager/turma-manager';
import { AtividadesManagerProvider } from '../atividades-manager/atividades-manager';
import { UsuarioManagerProvider } from '../usuario-manager/usuario-manager';
import { Atividade } from '../../classescustom/modelo/Atividade';
import { Usuario } from '../../classescustom/modelo/Usuario';
import { Turma } from '../../classescustom/modelo/Turma';
import { EstudanteAtividadeManagerProvider } from '../estudante-atividade-manager/estudante-atividade-manager';
import { EstudanteAtividade } from '../../classescustom/modelo/EstudanteAtividade';
import { DiaDeAulaProvider } from '../dia-de-aula/dia-de-aula';
import { DiaDeAula } from '../../classescustom/modelo/DiaDeAula';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ControllerProvider {
  public atvMngr: AtividadesManagerProvider;
  public turmaMngr: TurmaManagerProvider;
  public usuarioMngr: UsuarioManagerProvider;
  public estudanteAtvMngr: EstudanteAtividadeManagerProvider;
  public diaDeAulaMngr: DiaDeAulaProvider;
  public http: HttpClient;

  public usuarioLogado: Usuario = new Usuario();

  public turmaTemp: Turma = null;

  servidorMensagemEnviar(mensagemObjeto: Object, diretorioEndereco: string){
    mensagemObjeto['json'].txt = JSON.stringify(mensagemObjeto['json'].obj);

    console.log(mensagemObjeto['json'].txt);

    return this.http.get('http://localhost:80/monitorin-server/public/' + diretorioEndereco + '?msg=' + mensagemObjeto['json'].txt);
  }

  servidorMensagemEnviar3(diretorioEndereco: string){
    return this.http.get('http://localhost:80/monitorin-server/public/' + diretorioEndereco);
  }

  servidorMensagemEnviarPOST(mensagemObjeto: Object, diretorioEndereco: string){
    let mensagemTextoParametro = this.servidorMensagemEnviarPreparar(mensagemObjeto);
    return this.http.post('http://localhost:80/monitorin-server/public/' + diretorioEndereco, mensagemTextoParametro);
  }

  servidorMensagemEnviarPreparar(mensagemObjeto){
    let mensagemTexto = JSON.stringify(mensagemObjeto);

    console.log(mensagemTexto);

    let mensagemTextoParametro = {
      mensagem: mensagemTexto
    }

    return mensagemTextoParametro;
  }
}
