import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { PerfilRoutingModule } from './perfil-routing.module';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    ChipModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
