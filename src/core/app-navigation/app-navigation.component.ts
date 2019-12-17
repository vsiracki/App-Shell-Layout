import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';


@Component({
    selector:'app-navigation',
    templateUrl:'./app-navigation.component.html',
    styleUrls:['/app-navigation.component.scss']
})
export class NavigationComponent {


  @ViewChild('sidenav',{ static: false }) public sidenav: MatSidenav;

  @Output() closeNavigation = new EventEmitter();

  toggleActive:boolean = false;

  constructor() {}



  ngOnInit(): void {

  }


}
