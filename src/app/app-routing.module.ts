import { TopicoDetalheComponent } from './pages/topico-detalhe/topico-detalhe.component';
import { NaoLoginGuardService } from './services/guardians/nao-login-guard.service';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardService } from './services/guardians/login-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NaoLoginGuardService]
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'topico/:id',
    component: TopicoDetalheComponent,
    canActivate: [LoginGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
