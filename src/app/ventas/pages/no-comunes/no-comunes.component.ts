import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {
    //i18nSelect
     nombre: string='jose';
     genero:string='masculino';
     invitacionMapa= {
      'masculino':'invitarlo',
      'femenino':'invitarla'
     }

     //in18Plural
     clientes:string[]=['maria','juana','jose','lady','luis']
     
     clientesMapa={
      '=0' :'no tenemos clientes en espera',
      '=1' :'cliente en espera',
      'other':'tenemos # clientes esperando'
     }
     cambiarCliente (){
      this.nombre='Melissa';
      this.genero='femenino'

     }

     borrarCliente(){
     this.clientes.pop();
     }


     //KeyValue Pipe
     persona={
      nombre:'Jose', edad:31, direccion:'Bhirminjan, Germany'
     }

     //JsonPipe
     heroes=[
      {
      nombre:'superman',
      vuela:true
      },
      {
      nombre:'batman',
      vuela:false
      },
      {
      nombre:'professor Charls',
      vuela:false
      },
     ]


     //Async Pipe..... crear un obsebable
     miObservable = interval(1000); //0,1,2,3,4,5

     valorPromesa = new Promise ((resolve,reject) =>{
      setTimeout(()=>{resolve('tenemos data de promesa');},3500);
        });



}
