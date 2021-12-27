import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-list',
  templateUrl: './custom-list.component.html',
})
export class CustomListComponent {
  @Input() form: any;
  @Input() controlName: string;
  @Input() list: Array<any>;
  @Input() id!: string;
  @Input() label!: string;
}
