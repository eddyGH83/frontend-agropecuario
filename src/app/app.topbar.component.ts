import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthService } from './codificacion/pages/auth/service/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

  // variables del sesionstorage
  nombre: any;
  rol: any;



  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router, public app: AppComponent, public appMain: AppMainComponent) {
    this.nombre = sessionStorage.getItem('nombre');
    this.rol = sessionStorage.getItem('rol');
  }

  cerrarSesion() {
    this.confirmationService.confirm({
      message: '¿Estás seguro/a que deseas salir?',
      header: 'Confirmación',
      icon: 'pi pi-fw pi-power-off',
      accept: () => {
        // eliminar todas las variables de sesión en el localStorage
        sessionStorage.clear();
        this.router.navigate(['/']);
      }
    });
  }


}
