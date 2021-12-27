import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styles: ['.label { width: 200px; display: inline-block;}']
})
export class CustomInputComponent {
  @Input() form: any;
  @Input() controlName: string;
  @Input() id!: string;
  @Input() type!: string;
  @Input() label!: string;

}

