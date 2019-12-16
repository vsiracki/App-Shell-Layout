import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './app-navigation.component';
import { HeaderComponent } from './header/app-header.component';
import { SideNavComponent } from './side-nav/app-sidenav.component';
import { NavTabsComponent } from './nav-tabs/app-navtabs.component';


@NgModule({
  imports: [ CommonModule,   ],
  exports: [  NavigationComponent , HeaderComponent , NavTabsComponent, SideNavComponent],
  declarations: [ NavigationComponent , HeaderComponent, NavTabsComponent , SideNavComponent]
})
export class NavigationModule {

}
