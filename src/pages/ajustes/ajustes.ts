import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from './../modal/modal';




@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  // modal: any = ModalPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController ) {
  }

  activarPrincipal(){
    this.navCtrl.parent.select(2);
  }

  mostrarModal(){
    let modal = this.modalCtrl.create( ModalPage, { nombre: 'Ivan', apellido: 'Diaz'} );
    modal.present();

    modal.onDidDismiss( data => {

      if( data ){
        console.log('data del modal ', data );
      } else {
        console.log( 'La  modalse cerró sin paramentros' );

      }
    })
  }

}
