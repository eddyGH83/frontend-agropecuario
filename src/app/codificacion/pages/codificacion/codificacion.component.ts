import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codificacion',
  templateUrl: './codificacion.component.html',
  styleUrls: ['./codificacion.component.scss']
})
export class CodificacionComponent implements OnInit {

  // Progress Bar
  tabla_pb: boolean = false;

  // Cities
  departamento: any;
  selectedDepartamento: any;

  // registros
  registros: any;
  registro: any;


  constructor() { }

  ngOnInit(): void {

    this.departamento = [
      { depto: 'LA PAZ', codigo: '02' },
    ];

    this.selectedDepartamento = {
      depto: 'LA PAZ', codigo: '02'
    };

    this.registros = [
      { cuestionario: "UPA", nro_preg: 5, variable: "Nombre del establecimiento", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 8, variable: "Al haberse declarado como persona jurídica señale el tipo a la que pertenece:", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 12, variable: "Del total de superficie de la UPA, en el periodo julio 2024 a junio de 2025. ¿Cuánto dispone para los siguientes usos?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 31, variable: "¿Cuál es la infraestructura que tiene para la producción agrícola bajo cubierta (ambiente controlado)?  ", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 61, variable: "¿Qué vacunas aplicó a su ganado en el periodo de julio de 2024 a junio de 2025? ", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 73, variable: "¿Qué fuente de energía utiliza para la climatización de sus galpones?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 76, variable: "¿Cuáles otras prácticas de manejo sanitario realizan?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 88, variable: "¿Cuáles otras prácticas de manejo sanitario realizan?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 89, variable: "¿Qué fuente de energía utiliza para la climatización de sus galpones? ", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 97, variable: "¿Cuáles otras prácticas de manejo sanitario realizan?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 98, variable: "¿Qué fuente de energía utiliza para la climatización de sus galpones? ", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 109, variable: "¿Cuáles otras prácticas de manejo sanitario realizan?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 110, variable: "Al día de hoy, ¿Cuál es la cantidad de aves de corral que tiene considerando las siguientes opciones? (se excluyen gallos de pelea) ", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 114, variable: "¿Cuáles son las razas de ganado ovino que tiene al día de hoy?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 123, variable: "¿Qué vacunas aplicó a su ganado en periodo julio de 2024 a junio de 2025?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 125, variable: "¿Cuáles son las razas de ganado caprino que tiene?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 138, variable: "¿Qué vacunas aplicó a su ganado en periodo julio de 2024 a junio de 2025?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 162, variable: "¿Cuál(es) raza (s) y/o tipo (s) tiene? ", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 167, variable: "¿Qué vacunas aplicó a su ganado porcino En el periodo de julio de 2024 a junio de 2025? ", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 178, variable: "¿Cuál es la especie y cantidad, que tiene al día de hoy?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 179, variable: "En el periodo de julio de 2024 a junio de 2025, ¿de estas especies que cantidad destinó a la venta?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 180, variable: "En el periodo de julio de 2024 a junio de 2025, ¿Cuánto destinó al autoconsumo?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 182, variable: "¿Qué especies de peces cría o maneja? ", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 188, variable: "¿Qué otros animales acuáticos cría?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 207, variable: "¿Qué tipo de tecnología de precisión usa?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 208, variable: "¿Cuáles y cuantas son las instalaciones que tiene al día de hoy?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 210, variable: "¿Qué tipo de apoyo recibió?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 211, variable: "¿De qué institución? ", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 214, variable: "¿A qué servicio de crédito accedió? ", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 216, variable: "¿Qué prácticas de recuperación de suelos realiza? ", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 217, variable: "¿Qué métodos o prácticas de conservación de suelos realiza?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 218, variable: "¿Cómo se manejan los residuos agrícolas?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 219, variable: "¿Cuál es la disposición del estiércol que se genera en su UPA?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 221, variable: "En el periodo de julio de 2024 a junio de 2025 ¿Cuál es el número de troncas o arboles aprovechado por especie?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 223, variable: "¿Qué especies forestales no maderables aprovecha? Describir la cantidad y la unidad ", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 225, variable: " ¿Cuáles fueron las actividades que motivaron la habilitación?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 234, variable: "¿A qué otras actividades se dedican como productor?", total_carga: 100 },
      { cuestionario: "UPA", nro_preg: 236, variable: "¿A qué organización social, gremial o productiva pertenece?", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 7, variable: "  La comunidad se define como:", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 14, variable: "¿Qué actividad realiza la comunidad en estas tierras de uso comunal?", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 16, variable: "En la comunidad, con que medios habilitan nuevas áreas de cultivo, emplean: ", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 18, variable: "¿Con que finalidad realizó la habilitación de esas tierras de uso comunal?", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 21, variable: "¿Con qué especies forestaron o reforestaron? ", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 23, variable: "Indique la o las actividades agropecuarias que fomentan los programas y/o proyectos de desarrollo agropecuario y/o forestal ", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 24, variable: "De julio 2024 a junio 2025 ¿Qué tipo de instituciones apoyaron con programas o proyectos de desarrollo agropecuario y/o forestal? ", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 25, variable: "¿Cuál es el principal medio de comercialización de la producción de los miembros de la comunidad? ", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 28, variable: "Señale las plagas y/o enfermedades que afectan a los tres principales cultivos que se producen en la Comunidad", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 29, variable: "Indique las tres principales enfermedades y/o parásitos que atacan a su ganado ", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 31, variable: "¿Cuáles son las causas de degradación en los suelos agrícolas? ", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 32, variable: "¿Cuáles son las causas de la erosión de suelos agropecuarios?", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 33, variable: "¿En la comunidad, qué tipo de fuentes de agua se tiene para uso agrícola – pecuario?", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 34, variable: "¿En qué son empleadas estas fuentes de agua? ", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 35, variable: "Si estas aguas no las utiliza ¿Cuál es la causa principal? ", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 37, variable: "Si el agua está contaminada, ¿Cuáles son las principales causas?", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 39, variable: "¿Cuál es la causa principal de esta contaminación?", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 40, variable: "En la Comunidad, ¿Qué eventos climatológicos y naturales adversos se presentaron en el último año? y ¿en qué meses? ", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 41, variable: "¿Cuál de las opciones seleccionadas causó mayor daño?", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 42, variable: "Su comunidad ¿por la ocurrencia de estos eventos climatológicos extremos ha recibido apoyo de alguna institución? ", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 44, variable: "¿Qué especies de peces crían?", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 45, variable: "¿Cuál es el tipo de infraestructura utiliza en la cría peces?", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 48, variable: "¿Cuáles son las tres principales especies que caza?	", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 49, variable: "Las especies que cazan las destinan a:", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 50, variable: "¿Se practica el aprovechamiento sostenible de otros animales?", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 54, variable: "¿Cuáles son las principales especies que pesca?", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 55, variable: "Las especies que pesca las destina a:", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 57, variable: "¿Qué especies de madera extraen?	", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 59, variable: "¿Qué especies de productos no maderables aprovecha?	", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 61, variable: "¿Cuáles son los servicios al sector productivo?", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 62, variable: "En la Comunidad, en los últimos cinco años, fueron capacitados en: ", total_carga: 100 },
      { cuestionario: "COMUNAL", nro_preg: 64, variable: "En la comunidad, la energía eléctrica proviene de:", total_carga: 100 }
    ]

  }
  // Tabla de preguntas
  registrosTabla() {
  }

  codificacionSimple(reg: any) {
    // Implementación del método
  }

  codificacionDoble(reg: any){

  }
}

