import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router'

import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

// Contante que contiene las rutas de mi aplicación
const app_routes: Routes = [
  { path: 'home', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item', component: ItemComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [
    // Se usa 'useHash' para que el navegador sepa que esas rutas no son directorios, solo parte de la ruta
    RouterModule.forRoot( app_routes, { useHash: true} )
  ],
  exports: [
    // Se debe exportar para poder hacer uso de '<router-outler>' en el 'app.component.html'
    RouterModule
  ]
})

export class AppRoutingModule {

}
