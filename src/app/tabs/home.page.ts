import { Component, EnvironmentInjector, inject } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  informationCircleOutline,
  storefrontOutline,
  scanCircleOutline,
  peopleOutline,
  settingsOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class HomesPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({
      informationCircleOutline,
      storefrontOutline,
      scanCircleOutline,
      peopleOutline,
      settingsOutline,
    });
  }
}
