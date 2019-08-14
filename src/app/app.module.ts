import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng5SliderModule } from 'ng5-slider';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCompradorComponent } from './components/comprador/home-comprador/home-comprador.component';
import { HomeComponent } from './components/general/home/home.component';
import { HomeInversionistaComponent } from './components/inversionista/home-inversionista/home-inversionista.component';
import { RespNavComponent } from './resp-nav/resp-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RegistroCompradorComponent } from './components/comprador/registro-comprador/registro-comprador.component';
import { RegistroInversionistaComponent } from './components/inversionista/registro-inversionista/registro-inversionista.component';
import { BienvenidoComponent } from './components/general/bienvenido/bienvenido.component';
import { LoginComponent } from './components/general/login/login.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { SidebarCompradorComponent } from './components/comprador/sidebar-comprador/sidebar-comprador.component';
import { ResumenComponent } from './components/comprador/resumen/resumen.component';
import { PerfilComponent } from './components/comprador/perfil/perfil.component';
import { FinanciacionesComponent } from './components/comprador/financiaciones/financiaciones.component';
import { VerMasComponent } from './components/comprador/ver-mas/ver-mas.component';
import { SimularComponent } from './components/comprador/simular/simular.component';
import { PlanComponent } from './components/comprador/plan/plan.component';
import { PagareComponent } from './components/comprador/pagare/pagare.component';
import { PagoComponent } from './components/comprador/pago/pago.component';
import { SidebarInversionistaComponent } from './components/inversionista/sidebar-inversionista/sidebar-inversionista.component';
import { CuentaBancariaComponent } from './components/inversionista/cuenta-bancaria/cuenta-bancaria.component';
import { AprobarComponent } from './components/inversionista/aprobar/aprobar.component';
import { PagoInvComponent } from './components/inversionista/pago-inv/pago-inv.component';
import { ResumenInvComponent } from './components/inversionista/resumen-inv/resumen-inv.component';
import { PerfilInvComponent } from './components/inversionista/perfil-inv/perfil-inv.component';
import { InversionesComponent } from './components/inversionista/inversiones/inversiones.component';
import { VerMasInvComponent } from './components/inversionista/ver-mas-inv/ver-mas-inv.component';
import { SimularInvComponent } from './components/inversionista/simular-inv/simular-inv.component';
import { PlanInvComponent } from './components/inversionista/plan-inv/plan-inv.component';
import { TableinversionistaComponent } from './components/inversionista/tableinversionista/tableinversionista.component';
import { TablecompradorComponent } from './components/comprador/tablecomprador/tablecomprador.component';
import { FormInversionistaComponent } from './components/inversionista/form-inversionista/form-inversionista.component';
import { FormCompradorComponent } from './components/comprador/form-comprador/form-comprador.component';
import { FaqComponent } from './components/general/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeCompradorComponent,
    HomeComponent,
    HomeInversionistaComponent,
    RespNavComponent,
    RegistroCompradorComponent,
    RegistroInversionistaComponent,
    BienvenidoComponent,
    LoginComponent,
    FooterComponent,
    SidebarCompradorComponent,
    ResumenComponent,
    PerfilComponent,
    FinanciacionesComponent,
    VerMasComponent,
    SimularComponent,
    PlanComponent,
    PagareComponent,
    PagoComponent,
    SidebarInversionistaComponent,
    CuentaBancariaComponent,
    AprobarComponent,
    PagoInvComponent,
    ResumenInvComponent,
    PerfilInvComponent,
    InversionesComponent,
    VerMasInvComponent,
    SimularInvComponent,
    PlanInvComponent,    
    TableinversionistaComponent,
    TablecompradorComponent,
    FormInversionistaComponent,
    FormCompradorComponent,
    FaqComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    Ng5SliderModule,
    MatListModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
