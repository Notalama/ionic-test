import { ModalNewUserComponent } from './modal-new-user/modal-new-user.component';
import { Router } from '@angular/router';
import { Client } from './../models/client.model';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  headerTitle: string;
  allClients: Client[] = [];
  clients: Client[] = [];
  btnHidden = true;
  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private _storeService: StoreService) { }

  ngOnInit() {
    this.headerTitle = this.router.url.substring(1);
  }

  async addClient() {
    const modal = await this.modalCtrl.create({
      component: ModalNewUserComponent,
      cssClass: 'modal-component',
      showBackdrop: true
    });
    return await modal.present();
  }

  searchClient(value: string) {
    this._storeService.searchClient(value);
  }
}
