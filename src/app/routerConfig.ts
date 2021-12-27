import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading, PreloadAllModules } from '@angular/router';

import { CustomPreloadingStrategyService } from './services/custom-preloading-strategy.service';
import { NetworkAwarePreloadingStrategyService } from './services/network-aware-preloading-strategy.service';

import { MyNgTemplateComponent } from './my-ng-template/my-ng-template';
import { MyNgTemplateOutletComponent } from './my-ng-template-outlet/my-ng-template-outlet';
import { MyNgContainerComponent } from './my-ng-container/my-ng-container';
import { MyNgContentComponent } from './my-ng-content/my-ng-content';

import { ViewChildComponent } from './view-child/view-child';
import { ViewChildrenComponent } from './view-children/view-children';
import { ContentChildComponent } from './content-child/content-child';
import { ContentChildrenComponent } from './content-children/content-children';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
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
  {
    path: 'preloading-strategy',
    loadChildren: () =>
      import('./preloading-strategy/preloading-strategy.module').then(
        (m) => m.PreloadingStrategyModule
      ),
  },
  {path: '', component: ReactiveFormComponent},
  { path: '', redirectTo: '/ng-template', pathMatch: 'full' },
  { path: '**', component: MyNgTemplateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading})],
  //imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  // imports: [RouterModule.forRoot(routes, {preloadingStrategy: NetworkAwarePreloadingStrategyService})],
  // imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingStrategyService})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
