import { Injectable } from '@angular/core';

// Peticiones al servidor
import { HttpClient } from '@angular/common/http';

// Interfaces
import { ProductoInterface } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  // Bandera que indica que apenas está cargando los productos
  cargando = true;
  productos: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarProductos();

  }

  private cargarProductos() {
    this.http.get("https://portfolio-bfde4-default-rtdb.firebaseio.com/productos_idx.json")
      .subscribe( (resp: any) => {
        console.log(resp);
        this.productos = resp;
        console.log(this.productos);
        // La bandera ahora indica que no está cargando, ya se cargaron.
        setTimeout(() => {
          this.cargando = false;
        }, 2000);
      })
  }
}
