import { Component, Output, EventEmitter } from '@angular/core';



@Component({
  selector:'app-header',
  templateUrl:'./app-header.component.html',
  styleUrls:['./app-header.component.scss']
})
export class HeaderComponent{

  @Output() SideNavigationToggle = new EventEmitter();

  constructor(){}

  onToggleOpenSidenav() {
    // this.sidService.toggle();
    this.SideNavigationToggle.emit();
  }



}
