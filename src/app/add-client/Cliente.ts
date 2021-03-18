export class Cliente {
    constructor(
      public id: number,
      public cedula: number,
      public nomnbres: string,
      public apellidos?: string,
      public telefonos?: string,
      public email?: string
    ) {  }
  
  }