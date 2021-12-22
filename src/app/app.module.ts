import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyNgTemplateComponent } from './my-ng-template/my-ng-template';
import { MyNgTemplateOutletComponent } from './my-ng-template-outlet/my-ng-template-outlet';
import { MyNgContainerComponent } from './my-ng-container/my-ng-container';
import { MyNgContentComponent } from './my-ng-content/my-ng-content';
import { ProjectContentComponent } from './my-ng-content/project-content/project-content';
import { ProjectContent2Component } from './my-ng-content/project-content2/project-content2';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    MyNgTemplateComponent,
    MyNgTemplateOutletComponent,
    MyNgContainerComponent,
    MyNgContentComponent,
    ProjectContentComponent,
    ProjectContent2Component
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
