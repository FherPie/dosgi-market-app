import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddItemPage } from './agregar-factura/add-item.page';
import { ItemDetailPage } from './item-detail/item-detail.page';
import { IonicStorageModule } from '@ionic/storage';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemDetailPageModule } from './item-detail/item-detail.module';
import {FacturaService} from './todo/factura.service';
import { HomePage } from './home/home.page';
import { AndresPiedra } from './pipes/andres-piedra';
import { HomePageModule } from './home/home.module';
import { SeleccionarProductosComponent } from './seleccionar-productos/seleccionar-productos.component';
import { CobrarComponent } from './cobrar/cobrar.component';
import { AuthModule } from './auth/auth.module';

import { AddClientPage } from './add-client/add-client.page';
import { InfoFacturaLineaComponent } from './info-factura-linea/info-factura-linea.component';

@NgModule({
  declarations: [  AppComponent, AddItemPage, SeleccionarProductosComponent, CobrarComponent, AddClientPage ],
  entryComponents: [AddItemPage, ItemDetailPage, SeleccionarProductosComponent, CobrarComponent, AddClientPage],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule, 
      HttpModule, 
      FormsModule,
      ReactiveFormsModule, 
      ItemDetailPageModule, 
      IonicStorageModule.forRoot(), 
      HomePageModule, AuthModule ],
  providers: [
    StatusBar,
    SplashScreen,
    FacturaService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
