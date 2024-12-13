import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogosComponent } from './catalogos/catalogos.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path:'catalogos', component:CatalogosComponent},  
  ])],
  exports: [RouterModule]
})
export class DiccionariosRoutingModule { }