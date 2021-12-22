import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { MyNgTemplateComponent } from './my-ng-template/my-ng-template';
import { MyNgTemplateOutletComponent } from './my-ng-template-outlet/my-ng-template-outlet';
import { MyNgContainerComponent } from './my-ng-container/my-ng-container';
import { MyNgContentComponent } from './my-ng-content/my-ng-content';

import { ViewChildComponent } from './view-child/view-child';
import { ViewChildrenComponent } from './view-children/view-children';
import { ContentChildComponent } from './content-child/content-child';
import { ContentChildrenComponent } from './content-children/content-children';

const appRoutes: Routes = [
  { path: 'ng-template', component: MyNgTemplateComponent },
  {
    path: 'ng-template-outlet',
    component: MyNgTemplateOutletComponent,
  },
  { path: 'ng-container', component: MyNgContainerComponent },
  { path: 'ng-content', component: MyNgContentComponent },
  { path: 'view-child', component: ViewChildComponent },
  { path: 'view-children', component: ViewChildrenComponent },
  { path: 'content-child', component: ContentChildComponent },
  { path: 'content-children', component: ContentChildrenComponent },
  { path: 'preloading-strategy', loadChildren: () => import('./preloading-strategy/preloading-strategy.module').then(m => m.PreloadingStrategyModule) },
  { path: '', redirectTo: '/ng-template', pathMatch: 'full' },
  { path: '**', component: MyNgTemplateComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

/*
import { CustomPreloadingStrategyService } from './services/custom-preloading-strategy.service';
import { NetworkAwarePreloadingStrategyService } from './services/network-aware-preloading-strategy.service';

*/