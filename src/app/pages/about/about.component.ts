import { Component, OnInit } from '@angular/core';

// Services
import { InfoPageService } from '../../services/info-page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public _infoPageService: InfoPageService) { }

  ngOnInit(): void {
  }

}
