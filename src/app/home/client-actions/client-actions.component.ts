import { ModalActionComponent } from './modal-action/modal-action.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-actions',
  templateUrl: './client-actions.component.html',
  styleUrls: ['./client-actions.component.scss']
})
export class ClientActionsComponent implements OnInit {
  actionList: any[];
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    this.actionList = [
      {title: 'Planner', imageSrc: 'Planner'},
      {title: 'Workouts', imageSrc: 'Workouts'},
      {title: 'Launch for client', imageSrc: 'Launch for client'},
      {title: 'Usage', imageSrc: 'Usage'},
      {title: 'Progress', imageSrc: 'Progress'},
      {title: 'Profile', imageSrc: 'Profile'},
    ];
  }

  async showAction(action, clientName) {
    const modal = await this.modalCtrl.create({
      component: ModalActionComponent,
      componentProps: { title: action, client: clientName },
      cssClass: 'modal-component',
      showBackdrop: true
    });

    return await modal.present();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
