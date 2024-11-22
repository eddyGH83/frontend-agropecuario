import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { DiccionariosRoutingModule } from './diccionarios-routing.module';



@NgModule({
  declarations: [
    CatalogosComponent
  ],
  imports: [
    CommonModule,
    DiccionariosRoutingModule
  ]
})
export class DiccionariosModule { }
