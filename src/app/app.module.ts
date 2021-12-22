import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyNgTemplateComponent } from './my-ng-template/my-ng-template';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MyNgTemplateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
