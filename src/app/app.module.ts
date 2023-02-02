import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar el local de la App- el idioma.... se importa y se regstra el idioma que se desea
import localEs from '@angular/common/locales/es-HN';
import localBr from '@angular/common/locales/brx';
import {registerLocaleData} from '@angular/common';

 
registerLocaleData(localEs);
registerLocaleData(localBr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
        VentasModule,
        


  ],
  providers: [{provide: LOCALE_ID, useValue:'es-HN'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
