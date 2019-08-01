import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCompradorComponent } from './components/comprador/home-comprador/home-comprador.component';
import { HomeComponent } from './components/general/home/home.component';
import { HomeInversionistaComponent } from './components/inversionista/home-inversionista/home-inversionista.component';
import { RegistroCompradorComponent } from './components/comprador/registro-comprador/registro-comprador.component';
import { RegistroInversionistaComponent } from './components/inversionista/registro-inversionista/registro-inversionista.component';
import { BienvenidoComponent } from './components/general/bienvenido/bienvenido.component';
import { LoginComponent } from './components/general/login/login.component';

const routes: Routes = [
	{path:"home", component:HomeComponent},
	{path:"comprador", component:HomeCompradorComponent},
	{path:"inversionista", component:HomeInversionistaComponent},
	{path:"registroComprador", component:HomeInversionistaComponent},
	{path:"registroInversionista", component:HomeInversionistaComponent},
	{path:"bienvenido", component:HomeInversionistaComponent},
	{path:"login", component:HomeInversionistaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
