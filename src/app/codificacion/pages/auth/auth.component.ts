import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;

  // variables para autenticacion
  login: string;
  password: string;


  registros: any;


  constructor(
    private authService: AuthService, 
    private router: Router, 
    private fb: FormBuilder,    
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.authForm.valid) {
      this.verificarUsuario();
    }
  }

  verificarUsuario(): void {
    this.authService.autenticacion({
      login: this.authForm.value.username,
      password: this.authForm.value.password
    }).subscribe(
      (data: any) => {
        this.registros = data;             
        if (data.success==true){
          sessionStorage.setItem('token_agro', data.token_agro);          
          this.router.navigate(['/perfil'])    
          // Sesionstorage
          sessionStorage.setItem('nombre',data.data.nombre);
          sessionStorage.setItem('login',data.data.login);
          sessionStorage.setItem('rol',data.data.rol);
          sessionStorage.setItem('telefono',data.data.telefono);                    
        }             
        if (data.success == false) {
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Usuario no encontrado'});
        } 
      })
  }

}
