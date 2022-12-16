import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  art= {codigo:0,descripcion:"",precio:0};
  articulos =  [{codigo: 1,descripcion:"papas",precio:10.55},
                {codigo: 2,descripcion:"manzanas",precio:10.55},
                {codigo: 3,descripcion:"melon",precio:10.55},
                {codigo: 4,descripcion:"cebolla",precio:10.55},
                {codigo: 5,descripcion:"sandia",precio:10.55}
                ]

hayregistros(){
  return this.articulos.length>0;
}
borrar(codigo:number){
  for (let x = 0; x < this.articulos.length; x++) {
    if(this.articulos[x].codigo== codigo){
      this.articulos.splice(x,1);
      return;
    }
    
  }
}
seleccionar(art: {codigo:number, descripcion:string, precio:number}){
  this.art.codigo = art.codigo;
  this.art.descripcion = art.descripcion;
  this.art.precio = art.precio;
}
agregar(){
 if(this.art.codigo <= 0){
  alert('Debe de ingresar un valor mayor a 0');
  return ;
 }else{
  for (let x = 0; x < this.articulos.length; x++) {
    if(this.articulos[x].codigo==this.art.codigo){
      alert('Ya existe un item con ese codigo');
      return;
    }
 }

  this.articulos.push({codigo:this.art.codigo,
                       descripcion:this.art.descripcion,
                       precio:this.art.precio}
                      );
this.art.codigo =0;
this.art.descripcion ="";
this.art.precio =0;
  
}

}
modificar(){
  let estatus = false;
  for (let x = 0; x < this.articulos.length; x++) {
    if(this.articulos[x].codigo==this.art.codigo){
      this.articulos[x].descripcion = this.art.descripcion;
      this.articulos[x].precio = this.art.precio;
      estatus = true;
    }
    
  }
  if(!estatus){
    alert('No existe el codigo');
  }
}
}
