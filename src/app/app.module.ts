import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routerConfig';

import { AppComponent } from './app.component';
import { MyNgTemplateComponent } from './my-ng-template/my-ng-template';
import { MyNgTemplateOutletComponent } from './my-ng-template-outlet/my-ng-template-outlet';
import { MyNgContainerComponent } from './my-ng-container/my-ng-container';
import { MyNgContentComponent } from './my-ng-content/my-ng-content';
import { ProjectContentComponent } from './my-ng-content/project-content/project-content';
import { ProjectContent2Component } from './my-ng-content/project-content2/project-content2';
import { ViewChildComponent } from './view-child/view-child';
import { DemoComponent } from './view-child/demo.component';
import { ViewChildrenComponent } from './view-children/view-children';
import { ContentChildComponent } from './content-child/content-child';
import {
  ContentChildrenComponent,
  Tab,
  Pane,
} from './content-children/content-children';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  declarations: [
    AppComponent,
    MyNgTemplateComponent,
    MyNgTemplateOutletComponent,
    MyNgContainerComponent,
    MyNgContentComponent,
    ProjectContentComponent,
    ProjectContent2Component,
    ViewChildComponent,
    DemoComponent,
    ViewChildrenComponent,
    ContentChildComponent,
    ContentChildrenComponent,
    Tab,
    Pane,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
