import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';

import "animate.css";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public _infoPage: InfoPageService) {

    // Leer el archivo JSON

  }

}
