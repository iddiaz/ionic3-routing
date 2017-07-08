
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PAgina3Page} from '../index.paginas';
/**
 * Generated class for the Pagina2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  mutantes: any[] = [
    {
      nombre: 'Magneto',
      poder: 'Controlar metales'
    },
    {
      nombre: 'Wolverine',
      poder: 'Regeneración acelerada'
    },
    {
      nombre: 'Profesor X',
      poder: 'Poderes psiquicos'
    },
    {
      nombre: 'Gambito',
      poder: 'Cargar objetos inanimados con energía'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
  irPagina3( mutante: any ){
    console.log(mutante);
    this.navCtrl.push(PAgina3Page, {'mutante': mutante });
  }

}
