import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
import { TableinversionistaComponent } from './components/inversionista/tableinversionista/tableinversionista.component';
import { TablecompradorComponent } from './components/comprador/tablecomprador/tablecomprador.component';
import { FormInversionistaComponent } from './components/inversionista/form-inversionista/form-inversionista.component';
import { FormCompradorComponent } from './components/comprador/form-comprador/form-comprador.component';

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
    TableinversionistaComponent,
    TablecompradorComponent,
    FormInversionistaComponent,
    FormCompradorComponent    
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
