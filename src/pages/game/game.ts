import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  private playerCounter: number;
  private lifeStart: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.playerCounter = this.navParams.get('playerCounter');
    this.lifeStart = this.navParams.get('lifeStart');
    console.log('Game player' + this.playerCounter);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

}
