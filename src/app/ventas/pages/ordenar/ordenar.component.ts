import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit{
    
  enMayusculas:boolean=true;
  ordenarPor:string='';


  heroes: Heroe[] =[{
     nombre:'superman',
     vuela:true,
     color:Color.azul
     },
     {
      nombre:'deadpool',
      vuela:true,
      color:Color.rojo
     },
     {
      nombre:'aguaman',
      vuela:false,
      color:Color.azul
      },
      {
       nombre:'wonder women',
       vuela:true,
       color:Color.amarillo
      }     
    
    ]


  constructor(){

  }

ngOnInit():void{
  
}

  cambiar(){
        this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor:string){
    this.ordenarPor=valor;
  }
  
}
