class Clientes {
   private idCliente:number;
   private nombre: string; 
   private telefono: number;
   private vip: boolean=false;
   private visitas:number;
   
   constructor(idCliente:number , nombre:string , telefono:number, visitas:number) {
      this.idCliente = idCliente;
      this.nombre = nombre;
      this.telefono = telefono;
      this.visitas=visitas;
   }
   public getIdCliente():number {
      return this.idCliente;
  }
  public getNombre():string {
      return this.nombre;
  }
  public getTelefono():number {
      return this.telefono;
  }
  public getVip():boolean {
   return this.vip;
}
public getVisitas():number{
    return this.visitas;
}
  public setIdCliente(idCliente:number):void {
      this.idCliente = idCliente;
      
  }
  public setNombre(nombre:string):void {
      this.nombre = nombre;
  }
  public setTelefono(telefono:number):void {
      this.telefono = telefono;
  }
  public setVip(vip:boolean):void {
   this.vip = vip;

} 
public setVisitas(visitas:number):void{
    this.visitas=visitas;
}

  
}