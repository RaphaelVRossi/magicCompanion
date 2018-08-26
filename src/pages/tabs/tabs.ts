import {Component} from '@angular/core';

import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {HomePage} from '../home/home';
import {ConfigPage} from "../config/config";
import {TranslateService} from "@ngx-translate/core";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTab = HomePage;
  aboutTab = AboutPage;
  contactPage = ContactPage;
  configPage = ConfigPage;

  constructor(public translate: TranslateService) {

  }
}
