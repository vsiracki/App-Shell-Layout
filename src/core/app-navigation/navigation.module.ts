import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../../shared/material-Imports/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './app-navigation.component';
import { HeaderComponent } from './header/app-header.component';
import { SideNavComponent } from './side-nav/app-sidenav.component';
import { NavTabsComponent } from './nav-tabs/app-navtabs.component';
import { AppRoutingModule } from 'src/App-router/app-routing.module';



@NgModule({

    imports: [ CommonModule, AngularMaterialModule, AppRoutingModule,   FlexLayoutModule ],
  exports: [  NavigationComponent , HeaderComponent , NavTabsComponent, SideNavComponent],
  declarations: [ NavigationComponent , HeaderComponent, NavTabsComponent , SideNavComponent]
})
export class NavigationModule {

}
