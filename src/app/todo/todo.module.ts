import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TodoComponent } from './todo.component';
import { InfoFacturaLineaComponent } from '../info-factura-linea/info-factura-linea.component';

@NgModule({
  declarations: [TodoComponent,   InfoFacturaLineaComponent ],
  entryComponents: [ InfoFacturaLineaComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoComponent
      }
    ])
  ]
})
export class TodoModule { }
