import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { DiccionariosRoutingModule } from './diccionarios-routing.module';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    CatalogosComponent
  ],
  imports: [
    CommonModule,
    DiccionariosRoutingModule,
    DividerModule,
    ToastModule,
    ToolbarModule,
    TooltipModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextareaModule,
    MessagesModule,
    MessageModule,
		DropdownModule,
		ButtonModule,
    InputTextModule,
    ProgressBarModule,
    FormsModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ]
})
export class DiccionariosModule { }
