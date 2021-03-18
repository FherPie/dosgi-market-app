import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-info-factura-linea',
  templateUrl: './info-factura-linea.component.html',
  styleUrls: ['./info-factura-linea.component.scss'],
})
export class InfoFacturaLineaComponent implements OnInit {

  @Input() infoFactura;

  constructor() { }

  ngOnInit() {}


  

}
