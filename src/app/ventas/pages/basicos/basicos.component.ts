import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  
  nombreLower:string="joseluis";
  nombreUpper:string="JOSELUIS";
  nombreCompleto:string="joSE LUis";

  fecha:Date= new Date();// fecha actual
}
