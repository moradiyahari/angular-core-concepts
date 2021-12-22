import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-ng-template',
  templateUrl: './my-ng-template.html',
  styleUrls: [ './my-ng-template.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
