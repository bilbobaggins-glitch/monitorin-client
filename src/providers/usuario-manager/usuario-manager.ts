import { Injectable } from '@angular/core';
import { EstudanteAtividade } from '../../classescustom/modelo/EstudanteAtividade';
import { Usuario } from '../../classescustom/modelo/Usuario';

@Injectable()
export class UsuarioManagerProvider {
  usuarios: Array<Usuario> = new Array<Usuario>();
  estudantes: Array<Usuario> = new Array<Usuario>();
  professores: Array<Usuario> = new Array<Usuario>();
  logados: Array<Usuario> = new Array<Usuario>();
  logado: Usuario = null;
  
  usuarioSelecionado: Usuario = null;

}
