import { Component } from '@angular/core';

@Component({
  selector: 'my-ng-template',
  templateUrl: './my-ng-template.html',
  styleUrls: ['./my-ng-template.css'],
})
export class MyNgTemplateComponent {
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
