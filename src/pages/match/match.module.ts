import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MatchPage} from './match';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    MatchPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchPage),
    TranslateModule.forChild()
  ],
  exports: [
    MatchPage
  ]
})
export class MatchPageModule {
}
