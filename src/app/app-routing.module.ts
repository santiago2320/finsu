import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCompradorComponent } from './components/comprador/home-comprador/home-comprador.component';
import { HomeComponent } from './components/general/home/home.component';
import { HomeInversionistaComponent } from './components/inversionista/home-inversionista/home-inversionista.component';
import { RegistroCompradorComponent } from './components/comprador/registro-comprador/registro-comprador.component';
import { RegistroInversionistaComponent } from './components/inversionista/registro-inversionista/registro-inversionista.component';
import { BienvenidoComponent } from './components/general/bienvenido/bienvenido.component';
import { LoginComponent } from './components/general/login/login.component';
/*Imports Comprador*/
import { ResumenComponent } from './components/comprador/resumen/resumen.component';
import { PerfilComponent } from './components/comprador/perfil/perfil.component';
import { FinanciacionesComponent } from './components/comprador/financiaciones/financiaciones.component';
import { VerMasComponent } from './components/comprador/ver-mas/ver-mas.component';
import { SimularComponent } from './components/comprador/simular/simular.component';
import { PlanComponent } from './components/comprador/plan/plan.component';
import { PagareComponent } from './components/comprador/pagare/pagare.component';
import { PagoComponent } from './components/comprador/pago/pago.component';
/*Imports Inversionista*/
import { ResumenInvComponent } from './components/inversionista/resumen-inv/resumen-inv.component';
import { PerfilInvComponent } from './components/inversionista/perfil-inv/perfil-inv.component';
import { InversionesComponent } from './components/inversionista/inversiones/inversiones.component';
import { VerMasInvComponent } from './components/inversionista/ver-mas-inv/ver-mas-inv.component';
import { CuentaBancariaComponent } from './components/inversionista/cuenta-bancaria/cuenta-bancaria.component';
import { SimularInvComponent } from './components/inversionista/simular-inv/simular-inv.component';
import { PlanInvComponent } from './components/inversionista/plan-inv/plan-inv.component';
import { AprobarComponent } from './components/inversionista/aprobar/aprobar.component';
import { PagoInvComponent } from './components/inversionista/pago-inv/pago-inv.component';





const routes: Routes = [
	{path:"", redirectTo:"/home", pathMatch: 'full'},
	{path:"home", component:HomeComponent},
	{path:"comprador", component:HomeCompradorComponent},
	{path:"inversionista", component:HomeInversionistaComponent},
	{path:"registroComprador", component:RegistroCompradorComponent},
	{path:"registroInversionista", component:RegistroInversionistaComponent},
	{path:"bienvenido", component:BienvenidoComponent},
	{path:"login", component:LoginComponent},
	{path:"comprador/resumen", component:ResumenComponent}, 
	{path:"comprador/perfil", component:PerfilComponent},
	{path:"comprador/financiaciones", component:FinanciacionesComponent},
	{path:"comprador/verMas", component:VerMasComponent},
	{path:"comprador/simular", component:SimularComponent}, 
	{path:"comprador/plan", component:PlanComponent},
	{path:"comprador/pagare", component:PagareComponent},
	{path:"comprador/pago", component:PagoComponent},
	{path:"inversionista/resumen", component:ResumenInvComponent},
	{path:"inversionista/perfil", component:PerfilInvComponent},
	{path:"inversionista/inversiones", component:InversionesComponent},
	{path:"inversionista/verMas", component:VerMasInvComponent},
	{path:"inversionista/cuentaBancaria", component:CuentaBancariaComponent},
	{path:"inversionista/simular", component:SimularInvComponent},
	{path:"inversionista/plan", component:PlanInvComponent},
	{path:"inversionista/aprobar", component:AprobarComponent},
	{path:"inversionista/pago", component:PagoInvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
