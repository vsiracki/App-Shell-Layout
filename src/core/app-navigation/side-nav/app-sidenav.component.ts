import { Component, EventEmitter, Output, OnInit } from '@angular/core';



@Component({
  selector:'app-sidenav',
  templateUrl:'./app-sidenav.component.html',
  styleUrls:['./app-sidenav.component.scss']
})
export class SideNavComponent {

  constructor() {}
  @Output() closeNavigation = new EventEmitter();

  onToggleClose() {
    this.closeNavigation.emit();
  }

}
