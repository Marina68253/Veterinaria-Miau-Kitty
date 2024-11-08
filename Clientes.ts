class Clientes {
   private id:number;
   private nombre: string; 
   private telefono: number;
   private vip: boolean;
   constructor(id:number , nombre:string , telefono:number) {
      this.id = id;
      this.nombre = nombre;
      this.telefono = telefono;
   }
   public getId():number {
      return this.id;
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
  public setId(id:number):void {
      this.id = id;
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

  
}