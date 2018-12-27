import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';




import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  // creating a new object
  shoppingItem = {} as ShoppingItem;

  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase ) {
    this.shoppingItemRef$ = this.database.list('shopping-list');
  }

  addShoppingItem(shoppingItem: ShoppingItem){
    /*
      create a new anonymos object and convert itemNumber to a number.
      push this to our Firebase database under the 'shopping-list' node.
    */
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber)
    });

    //Reset our ShoppingItem
    this.shoppingItem = {} as ShoppingItem;

    //Navigate the user back to the ShoppingListPage
    this.navCtrl.pop();

  }

  
}
