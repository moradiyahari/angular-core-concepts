import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './routerConfig';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  DEFAULT_TIMEOUT,
  HttpInterceptorService,
} from './services/http-interceptor.service';
import { PasswordService } from './services/password.service';

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
import { ContentChildrenComponent } from './content-children/content-children';
import { Tab } from './content-children/tab/tab.component';
import { Pane } from './content-children/pane/pane.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
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
    ReactiveFormComponent
  ],
  providers: [
    PasswordService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    { provide: DEFAULT_TIMEOUT, useValue: 60000 },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
