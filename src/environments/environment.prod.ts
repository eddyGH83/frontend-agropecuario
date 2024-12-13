export const environment = {
  production: true,
  apiUrl: 'http://10.33.0.109:3333' // Para el entorno de producción
};

// Para construir la aplicación para el entorno de producción:
// ng build --configuration production



// NOTA. 
// Cuando ejecutas ng build --configuration production, Angular CLI reemplaza 
// automáticamente environment.ts con environment.prod.ts 
// debido a la configuración en angular.json.