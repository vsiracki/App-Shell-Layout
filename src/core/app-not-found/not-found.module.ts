import { AppNotFoundComponent } from './app-not-found.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundRoutingModule } from './not-found-routing.module';



@NgModule({
  imports: [ CommonModule,  NotFoundRoutingModule ],
  exports: [ AppNotFoundComponent ],
  declarations: [ AppNotFoundComponent ]
})
export class NotFoundModule {}
