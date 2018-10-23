import { ClientActionsComponent } from './../client-actions/client-actions.component';
import { Client } from './../../models/client.model';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../shared/store.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];
  selectedClient: number;
  constructor(private _storeService: StoreService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this._storeService.getFullClientList();
    this._storeService.clientListSubject.subscribe((res: Client[]) => {
      this.clients = res;
    }, err => {
      throw err;
    });
  }

  searchClient(value: string) {
    this._storeService.searchClient(value);
  }

  loadData(event) {
    this._storeService.loadData(this.clients, event);
  }

  async openClientActions(client: Client, index: number) {
    this.selectedClient = index;
    const modal = await this.modalCtrl.create({
      component: ClientActionsComponent,
      componentProps: { name: client.name },
      cssClass: 'modal-component',
      showBackdrop: true
    });
    modal.onDidDismiss().then(() => {
      this.selectedClient = null;
    });
    return await modal.present();
  }
}
