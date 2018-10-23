import { NavigationComponent } from './../navigation/navigation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ClientActionsComponent } from './client-actions/client-actions.component';
import { ModalNewUserComponent } from './modal-new-user/modal-new-user.component';
import { ModalActionComponent } from './client-actions/modal-action/modal-action.component';
import { ClientListComponent } from './client-list/client-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, NavigationComponent, ClientActionsComponent, ModalNewUserComponent, ModalActionComponent, ClientListComponent]
})
export class HomePageModule {}
