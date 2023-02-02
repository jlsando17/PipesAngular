import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
   name:'vuela'
})
export class VuelaPipe implements PipeTransform {

    transform(valor:string, enMayusculas:boolean=true):string {

        return (valor)
        ? 'vuela'
        :'no vuela';

        }
    }


