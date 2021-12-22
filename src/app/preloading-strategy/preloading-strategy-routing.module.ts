import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PreloadingStrategyComponent } from './preloading-strategy.component';

const routes = [
  {
    path: '',
    component: PreloadingStrategyComponent,
    children: [
      {
        path: 'demo1',
        data: { preload: true, loadAfterSeconds: 5 },
        loadChildren: () =>
          import('./demo1/demo1.module').then((m) => m.Demo1Module),
      },
      {
        path: 'demo2',
        loadChildren: () =>
          import('./demo2/demo2.module').then((m) => m.Demo2Module),
      },
      { path: '', redirectTo: 'demo1', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreloadingStrategyRoutingModule {}
