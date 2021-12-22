import { Component, Input } from '@angular/core';

@Component({
  selector: 'demo',
  template: `<h4>Hello, {{name}}!</h4>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class DemoComponent {
  @Input() name: string;
}
