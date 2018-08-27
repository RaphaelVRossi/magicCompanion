import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {GamePage} from './game';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    GamePage,
  ],
  imports: [
    IonicPageModule.forChild(GamePage),
    TranslateModule.forChild()
  ],
  exports: [
    GamePage
  ]
})
export class GamePageModule {}
