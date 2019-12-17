import { Component, Output, EventEmitter, ElementRef, QueryList, ViewChildren, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';




@Component({
  selector:'app-navtabs',
  templateUrl:'./app-navtabs.component.html',
  styleUrls:['./app-navtabs.component.scss']
})
export class NavTabsComponent implements OnInit{


  @Output() SideNavigationToggle = new EventEmitter();

  activeClass = 'active';
  @ViewChildren(RouterLinkActive, { read: ElementRef })
  linkRefs: QueryList<ElementRef>;

  onToggleOpenSidenav() {
    this.SideNavigationToggle.emit();
  }

  constructor(){

  }

  ngOnInit() {
  //  this.findActiveLink();
  }

  // findActiveLink = (): ElementRef | undefined => {
  //   return this.linkRefs.toArray()
  //     .find(e => e.nativeElement.classList.contains(this.activeClass));
  // }

}
