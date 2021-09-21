import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Interfaces
import { InfoPageInterface } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  // Aquí no nos marca error porque el la definición de la interface usamos el '?'
  info: InfoPageInterface = {};
  cargada: boolean = false;
  equipo: any[] = [];

  constructor( private http: HttpClient ) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get("assets/data/data-page.json")
      .subscribe( (resp: InfoPageInterface) => {
        // Me indica que los datos estan cargados
        this.cargada = true;
        // Paso los datos a una variable de tipo any 'info'
        this.info = resp;
      })
  }

  private cargarEquipo() {
    this.http.get("https://portfolio-bfde4-default-rtdb.firebaseio.com/equipo.json")
      .subscribe( (resp: any) => {
        this.equipo = resp;
      })
  }
}
