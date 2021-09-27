import { Component, OnInit } from '@angular/core';

// Routes
import { ActivatedRoute } from '@angular/router';

// Services
import { ProductosService } from '../../services/productos.service';

// Interfaces
import { ProductoDescripcionInterface } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  productoLocal: ProductoDescripcionInterface = {};
  id: string = "";

  // Para leer la variable pasada por la url
  constructor(private route: ActivatedRoute, public _productoService: ProductosService) { }

  ngOnInit() {
    this.route.params
      .subscribe( parametros => {
        // console.log(parametros.id);
        this._productoService.getProducto(parametros['id'])
          .subscribe((producto: ProductoDescripcionInterface) => {
            this.id = parametros['id'];
            this.productoLocal = producto;
            // console.log(producto);
          });
      })
  }

}
