import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: MenuItem[]=[];

constructor(){}

  ngOnInit() {
    this.items = [
        {
            label: 'Pipes de Angular',
            icon:"pi pi-desktop",
            items: [{
                    label: 'Textos y Fechas', 
                    icon: 'pi pi-aling-left',
                    routerLink:''
                    },
                    {
                    label: 'Números', 
                    icon: 'pi pi-dollar',
                    routerLink:'numeros'
                    },
                    {
                    label: 'No Comunes', 
                    icon: 'pi pi-globe',
                    routerLink:'no-comunes'
                    }
            ]
        },
        {
            label: 'Pipes Personalizados',
            icon: 'pi pi-cog',
            routerLink:'ordenar'
            
        }
    ];
}

}
