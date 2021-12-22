import { Routes } from '@angular/router';
import { MyNgTemplateComponent } from './my-ng-template/my-ng-template';
import { MyNgTemplateOutletComponent } from './my-ng-template-outlet/my-ng-template-outlet';
import { MyNgContainerComponent } from './my-ng-container/my-ng-container';
import { MyNgContentComponent } from './my-ng-content/my-ng-content';

export const appRoutes: Routes = [
  { path: 'ng-template', component: MyNgTemplateComponent },
  {
    path: 'ng-template-outlet',
    component: MyNgTemplateOutletComponent,
  },
  { path: 'ng-container', component: MyNgContainerComponent },
  { path: 'ng-content', component: MyNgContentComponent },
  { path: '', redirectTo: '/ng-template', pathMatch: 'full' },
  { path: '**', component: MyNgTemplateComponent },
];
