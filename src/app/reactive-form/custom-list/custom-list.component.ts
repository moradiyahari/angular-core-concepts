import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-list',
  templateUrl: './custom-list.component.html',
  styles: ['label { width: 200px; }']
})
export class CustomListComponent {
  @Input() form: any;
  @Input() controlName: string;
  @Input() list: Array<any>;
  @Input() id!: string;
  @Input() label!: string;
}
