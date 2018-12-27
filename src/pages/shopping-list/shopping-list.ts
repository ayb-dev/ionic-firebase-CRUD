import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FirebaseListObservable, AngularFireDatabase} from 'angularfire2/database-deprecated';

import { AddShoppingPage } from '../add-shopping/add-shopping';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface'

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.shoppingListRef$ = this.database.list('shopping-list');
  }

  navigateToAddShopingPage() {
    // navigate the user to the AddShopingPage
    this.navCtrl.push(AddShoppingPage);
  }


}
