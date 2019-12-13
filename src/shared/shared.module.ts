import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../App-router/app-routing.module';
import { AngularMaterialModule } from '../AngularMaterial-Imports/AngularMaterial.module';




@NgModule({
  declarations: [],
  imports: [ AppRoutingModule ],
  exports: [
    AngularMaterialModule,
    AppRoutingModule,

  ]
})
export class SharedModule { }
