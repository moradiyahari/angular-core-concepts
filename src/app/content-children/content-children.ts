import { Component } from '@angular/core';

@Component({
  selector: 'content-children',
  templateUrl: './content-children.html',
})
export class ContentChildrenComponent {
  shouldShow = false;

  show() {
    this.shouldShow = true;
  }
}
