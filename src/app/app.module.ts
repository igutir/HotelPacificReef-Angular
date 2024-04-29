import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MaterialModule} from './modules/material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminReservasComponent } from './components/admin-reservas/admin-reservas.component';
import { HomeComponent } from './components/home/home.component';
import { AdminEmpleadosComponent } from './components/admin-empleados/admin-empleados.component';
import { BuscarReservaComponent } from './components/buscar-reserva/buscar-reserva.component'


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'admin_reservas', component: AdminReservasComponent },
  { path: 'admin_empleados', component: AdminEmpleadosComponent },
  { path: 'buscar_reserva', component: BuscarReservaComponent },  
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AdminReservasComponent,
    HomeComponent,
    AdminEmpleadosComponent,
    BuscarReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
