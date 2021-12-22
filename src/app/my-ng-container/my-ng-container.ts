import { Component } from '@angular/core';

@Component({
  selector: 'my-ng-container',
  templateUrl: './my-ng-container.html',
  styleUrls: ['./../my-ng-template/my-ng-template.css'],
})
export class MyNgContainerComponent {
  items = [
    { name: 'A', id: 1 },
    { name: 'B', id: 2 },
    { name: 'C', id: 3 },
  ];
  constructor() {}
  trackById(item) {
    return item.id;
  }
}
