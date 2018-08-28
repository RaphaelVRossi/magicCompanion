import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {GamePage} from "../game/game";

/**
 * Generated class for the MatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {
  private playerCounter: number;
  private lifeStart: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchPage');
  }


  startGame() {
    console.log('Player counter:' + this.playerCounter);
    this.navCtrl.push(GamePage, {
      'playerCounter': this.playerCounter,
      'lifeStart': this.lifeStart
    });
  }
}
