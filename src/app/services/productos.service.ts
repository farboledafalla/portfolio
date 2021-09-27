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
  productosFiltrados: ProductoInterface[] = [];

  constructor( private http: HttpClient ) {

    this.cargarProductos();

  }

  private cargarProductos() {

    return new Promise<void>( ( resolve, reject ) => {
      this.http.get("https://portfolio-bfde4-default-rtdb.firebaseio.com/productos_idx.json")
        .subscribe( (resp: any) => {
          // console.log(resp);
          this.productos = resp;
          // console.log(this.productos);
          // La bandera ahora indica que no está cargando, ya se cargaron.
            this.cargando = false;
            resolve();
        });
    });

  }

  getProducto(id: string) {
    return this.http.get(`https://portfolio-bfde4-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto( termino: string ) {

    if ( this.productos.length === 0) {
      // Cargar productos
      this.cargarProductos().then( () => {
        // Esto se ejecutará despues de obtener los productos
        // Aplicar el filtro
        this.filtrarProductos( termino );
      });
    } else {
      // Aplicar el filtro
      this.filtrarProductos( termino );
    }

    // this.productosFiltrados = this.productos.filter( producto => {
    //   return true;
    // });
    // console.log( this.productosFiltrados );
  }

  private filtrarProductos( termino: string ) {
    // console.log( this.productos );
    // Purgar el arreglo para que no acumule resultados de las busquedas
    this.productosFiltrados = [];

    // Pasar a miniscula el termino a buscar
    termino = termino.toLocaleLowerCase();

    // Llemar el arreglo de productos filtrados en base a la condición que escribe la persona en la vista
    this.productos.forEach( prod => {

      // Pasar a miniscula el título que esta en la bd
      const tituloLower = prod.titulo.toLocaleLowerCase();

      // Preguntar si coincide lo que se escribio con las categorias de los productos
      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
        this.productosFiltrados.push( prod );
      }
    });
  }

}
