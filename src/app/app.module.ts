import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyNgTemplateComponent } from './my-ng-template/my-ng-template';
import { MyNgTemplateOutletComponent } from './my-ng-template-outlet/my-ng-template-outlet';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    MyNgTemplateComponent,
    MyNgTemplateOutletComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
