import {NgModule} from '@angular/core';

import { MatButtonModule,
         MatToolbarModule,
         MatSidenavModule,
         MatIconModule,
         MatTabsModule,
         MatListModule
        } from '@angular/material';


@NgModule({
  exports: [ MatButtonModule,
             MatToolbarModule,
             MatSidenavModule,
             MatIconModule,
             MatTabsModule,
             MatListModule
          ]
})
export class AngularMaterialModule {

}
