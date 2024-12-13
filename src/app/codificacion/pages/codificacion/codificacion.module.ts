import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodificacionComponent } from './codificacion.component';
import { CodificacionRoutingModule } from './codificacion-routing.module';
import { KnobModule } from 'primeng/knob';
import { ToolbarModule } from 'primeng/toolbar';
import { ScrollTopModule } from 'primeng/scrolltop';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CodificacionComponent
  ],
  imports: [
    CommonModule,
    CodificacionRoutingModule,

    KnobModule,
    ToolbarModule,
    ScrollTopModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextareaModule,
    ConfirmPopupModule,
    ToastModule,
    FileUploadModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    TooltipModule,
    CheckboxModule,
    ToggleButtonModule,
		DropdownModule,
		ButtonModule,
    ChipModule,
    BadgeModule,
    InputTextModule,
    ProgressBarModule,
    FormsModule
  ]
})
export class CodificacionModule { }
