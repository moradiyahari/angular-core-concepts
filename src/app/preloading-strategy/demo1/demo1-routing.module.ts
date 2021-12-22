import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Demo1Component } from './demo1.component';

const routes: Routes = [{ path: '', component: Demo1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Demo1RoutingModule { }
