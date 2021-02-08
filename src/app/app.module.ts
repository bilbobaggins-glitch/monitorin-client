import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { AlterarSenhaPage } from '../pages/alterar-senha/alterar-senha';
import { EstudanteAtividadesPage } from '../pages/estudante-atividades/estudante-atividades';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';
import { BlankPage } from '../pages/blank/blank';
import { AtividadesManagerProvider } from '../providers/atividades-manager/atividades-manager';
import { UsuarioManagerProvider } from '../providers/usuario-manager/usuario-manager';
import { AtividadeEspecificaPage } from '../pages/atividade-especifica/atividade-especifica';
import { CadastroDeUsuarioPage } from '../pages/cadastro-de-usuario/cadastro-de-usuario';
import { CadastroDisciplinaPage } from '../pages/cadastro-disciplina/cadastro-disciplina';
import { TurmaManagerProvider } from '../providers/turma-manager/turma-manager';
import { EstudanteAtividadeManagerProvider } from '../providers/estudante-atividade-manager/estudante-atividade-manager';
import { ControllerProvider } from '../providers/controller-provider/controller-provider';
import { EstudanteDiaDeAulaProvider } from '../providers/estudante-dia-de-aula/estudante-dia-de-aula';
import { DiaDeAulaProvider } from '../providers/dia-de-aula/dia-de-aula';
import { MonitoradaPage } from '../pages/monitorada/monitorada';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EstudanteTurmaProvider } from '../providers/estudante-turma/estudante-turma';
import { ProfessorFrequenciaPage } from '../pages/professor-frequencia/professor-frequencia';
import { SideMenuPage } from '../pages/side-menu/side-menu';
import { AtividadesPage } from '../pages/atividades/atividades';

@NgModule({
  declarations: [
    MyApp,
    AlterarSenhaPage,
    AtividadeEspecificaPage,
    EstudanteAtividadesPage,
    ProfessorFrequenciaPage,
    LoginPage,
    PerfilPage,
    BlankPage,
    CadastroDeUsuarioPage,
    CadastroDisciplinaPage,
    SideMenuPage,
    MonitoradaPage,
    AtividadesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlterarSenhaPage,
    AtividadeEspecificaPage,
    EstudanteAtividadesPage,
    ProfessorFrequenciaPage,
    LoginPage,
    PerfilPage,
    BlankPage,
    CadastroDeUsuarioPage,
    CadastroDisciplinaPage,
    SideMenuPage,
    MonitoradaPage,
    AtividadesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AtividadesManagerProvider,
    UsuarioManagerProvider,
    TurmaManagerProvider,
    EstudanteAtividadeManagerProvider,
    ControllerProvider,
    EstudanteDiaDeAulaProvider,
    DiaDeAulaProvider,
    EstudanteTurmaProvider
  ]
})
export class AppModule {}
