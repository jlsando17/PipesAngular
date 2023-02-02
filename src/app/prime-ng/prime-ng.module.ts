import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//PrimeNg
import {ButtonModule} from 'PrimeNg/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';





@NgModule({
  exports: [
    CardModule,
    CommonModule,
    ButtonModule,
    FieldsetModule,
    MenubarModule,
    ToolbarModule,
    TableModule
    
  ]
})
export class PrimeNgModule { }
