import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { DemoComponent } from './demo.component';

@Component({
  selector: 'view-child',
  templateUrl: './view-child.html',
})
export class ViewChildComponent {
  name = 'Harikrushna';

  //Example to access child component
  @ViewChild(DemoComponent, { static: false }) hello: DemoComponent;

  //Example to access child element
  @ViewChild('myPRef', { static: false }) myPRef: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    console.log('Hello ', 'j' + this.hello.name, 3);
    console.log(this.myPRef.nativeElement.innerHTML);
    this.myPRef.nativeElement.innerHTML = 'DOM updated succesfully!!!';
  }
}
