import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  nombre: any;
  login: any;
  rol:any;
  telefono: any;

  constructor() { }

  ngOnInit(): void {
    // Recupera datos del sessionstorage
    this.nombre= sessionStorage.getItem('nombre')
    this.login= sessionStorage.getItem('login')
    this.rol= sessionStorage.getItem('rol')
    this.telefono= sessionStorage.getItem('telefono')
  }

}
