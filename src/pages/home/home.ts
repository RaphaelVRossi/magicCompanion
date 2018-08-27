import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {MatchPage} from "../match/match";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public translate: TranslateService) {
  }

  startMatch() {
    this.navCtrl.push(MatchPage);
  }
}
