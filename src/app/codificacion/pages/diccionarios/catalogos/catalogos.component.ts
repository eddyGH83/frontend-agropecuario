import { Component, OnInit } from '@angular/core';


import { ConfirmationService, MessageService } from 'primeng/api';
import { CatalogosService } from './service/catalogos.service';


import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.scss']
})

export class CatalogosComponent implements OnInit {

  // registros
  registros: any;
  registro: any;

  // Progress Bar
  tabla_pb: boolean = false;

  // selectedRegistros: any;


  // msgs: any = [];


  // registroDialog
  registroDialog: boolean;


  // submitted
  submitted: boolean;





  // cuestionarios
  cuestionarios: any;
  selectedCuestionario: any;


  // catalogos  
  catalogos: any = [];
  selectedCatalogo: any = {};

  //msgService
  msgService: boolean = false;
  titleMsgError: string = '';

  //dialog eliminar
  dialogEliminar: boolean = false;

  //
  registrosAux: any = [];
  first: number = 0;

  // Campos de busqueda
  codigo: string = '';
  descripcion: string = '';
  feccre: string = '';
  usucre: string = '';
  fecmod: string = '';
  usumod: string = '';


  constructor(private messageService: MessageService, private catalogosService: CatalogosService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    // cuestionarios  
    this.cuestionarios = [
      { cat_cuest: 'UPA', cuestionario: 'UPA' },
      { cat_cuest: 'COMUNAL', cuestionario: 'COMUNAL' }
    ]
    this.selectedCuestionario = { cat_cuest: 'UPA', cuestionario: 'UPA' };


    this.listarDescripcionCatalogos();
    this.registrosTabla();

  }

  // Tabla detalle
  listarDescripcionCatalogos() {
    //this.tabla_pb = true;
    this.catalogos = [];
    this.selectedCatalogo = {};
    this.catalogosService.listarDescripcionCatalogos({ cuestionario: this.selectedCuestionario.cuestionario }).subscribe(
      (data: any) => {
        this.catalogos = data.data;
        this.selectedCatalogo = this.catalogos[0];
        this.registrosTabla();
        console.table(this.catalogos);
        console.log(this.selectedCatalogo);
      },
      (error: any) => {
        console.error('Error al listar descripciones de catálogos:', error);
      }
    )
  }



  // Insertar registro
  saveRegistro() {
    this.catalogosService.saveRegistro({
      cat_cuest: this.selectedCuestionario.cuestionario,
      catalogo: this.selectedCatalogo.catalogo,
      login: sessionStorage.getItem('login'),
      codigo: this.registro.codigo,
      descripcion: this.registro.descripcion
    }).subscribe(
      (data: any) => {
        if (data.success == true) {
          this.messageService.add({ severity: 'success', summary: 'Mensaje:', detail: data.message, life: 2000 });
          this.registroDialog = false;
          this.registrosTabla();
          this.registro = {};
        }
        if (data.success == false) {
          this.messageService.add({ severity: 'error', summary: 'Mensaje:', detail: data.message, life: 2000 });
        }
      },
      (error: any) => {
        console.error('Error al actualizar registro:', error);
      }
    )
  }



  // Tabla detalle 
  registrosTabla() {
    // Limpiar todos los campos de busqueda
    /* this.codigo = '';
    this.descripcion = '';
    this.feccre = '';
    this.usucre = '';
    this.fecmod = '';
    this.usumod = ''; */

    this.tabla_pb = true;
    this.catalogosService.listarCatalogos({ catalogo: this.selectedCatalogo.catalogo, cuestionario: this.selectedCuestionario.cuestionario }).subscribe(
      (data: any) => {
        this.registros = data.data;
        //console.table(data.data);
        this.tabla_pb = false;
        //this.registrosAux = data2.datos.rows;
      })
  }




  // Buscar por el campo codigo
  buscarPorCodigo() {


  }

  // Buscar por el campo descripcion
  buscarPorDescripcion() {



  }

  // Buscar por el campo fecha de creacion
  buscarPorFecCre() {

  }

  // Buscar por el campo usuario de creacion
  buscarPorUsuCre() {


  }




  // Buscar por el campo fecha de modificacion
  buscarPorFecMod() {


  }

  // Buscar por el campo usuario de modificacion
  buscarPorUsuMod() {


  }

  // Buscar por el campos
  busquedaPorLosDemasCampos() {

  }

  openNew() {
    this.submitted = false;
    // this.productDialog = true;
    this.registro = {};
    this.registroDialog = true;
  }

  hideDialog() {
    this.registroDialog = false;
    this.submitted = false;
  }




  // Editar registro  
  editRegistro(registro: any) {

  }

  // Eliminar registros
  deletetRegistro(registro: any) {


  }


  // exportar a excel 
  exportExcel() {
    let date = new Date();
    let formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.registros);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, this.selectedCuestionario.cuestionario + "_" + this.selectedCatalogo.catalogo + "_" + formattedDate);
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + EXCEL_EXTENSION);
    this.messageService.add({ severity: 'success', summary: 'Mensaje:', detail: 'Exportación completada.', life: 2000 });
  }

}

