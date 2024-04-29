import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MaterialModule} from './modules/material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { AdminTodasReservasComponent } from './admin-todas-reservas/admin-todas-reservas.component';
import { AdminTodosEmpleadosComponent } from './admin-todos-empleados/admin-todos-empleados.component'


const routes: Routes = [
  { path: 'admin_reservas', component: AdminTodasReservasComponent },
  { path: 'admin_empleados', component: AdminTodosEmpleadosComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    AdminTodasReservasComponent,
    AdminTodosEmpleadosComponent
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
