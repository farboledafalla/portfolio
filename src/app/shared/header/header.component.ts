import { Component, OnInit } from '@angular/core';

// Rutas
import { Router } from '@angular/router';

// Services
import { InfoPageService } from '../../services/info-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _infoPageService: InfoPageService, private router: Router) { }

  ngOnInit() {
  }

  buscarProducto( termino: string ) {

    if(termino.length < 1) {
      // Que no haga nada
      return;
    }
    this.router.navigate(['/search', termino]);
    console.log( termino );
  }

}
