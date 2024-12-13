import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodificacionComponent } from './codificacion.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: CodificacionComponent },
  ])],
  exports: [RouterModule]
})

export class CodificacionRoutingModule { }