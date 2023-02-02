import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';

const routes:Routes=[
{
  path:'',
  component:BasicosComponent
},
{
  path:'numeros',
  component:NumerosComponent,
},
{
  path:'ordenar',
  component:OrdenarComponent,
},
{
  path:'no-comunes',
  component:NoComunesComponent,
},
{
  path:'**',
  redirectTo:''
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class AppRouterModule { }
