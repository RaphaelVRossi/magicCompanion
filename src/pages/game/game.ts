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

  private lifePlayerOne: number;
  private lifePlayerTwo: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.playerCounter = this.navParams.get('playerCounter');
    this.lifeStart = this.navParams.get('lifeStart');
    this.lifePlayerOne = this.lifeStart;
    this.lifePlayerTwo = this.lifeStart;
    console.log('Game player' + this.playerCounter);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

  addLifePlayerOne() {
    this.lifePlayerOne++;
  }

  removeLifePlayerOne() {
    this.lifePlayerOne--;
  }

  addLifePlayerTwo() {
    this.lifePlayerTwo++;
  }

  removeLifePlayerTwo() {
    this.lifePlayerTwo--;
  }
}
