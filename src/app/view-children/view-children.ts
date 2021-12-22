import { Component, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { DemoComponent } from '../view-child/demo.component';

@Component({
  selector: 'view-children',
  templateUrl: './view-children.html',
})
export class ViewChildrenComponent {
  @ViewChildren(DemoComponent) demos: QueryList<any>;

  constructor() {}

  ngAfterViewInit() {
     this.demos.forEach(demo => console.log(demo.name));
  }
}
