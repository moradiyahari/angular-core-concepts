import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadingStrategyRoutingModule } from './preloading-strategy-routing.module';
import { PreloadingStrategyComponent } from './preloading-strategy.component';


@NgModule({
  declarations: [PreloadingStrategyComponent],
  imports: [
    CommonModule,
    PreloadingStrategyRoutingModule
  ]
})
export class PreloadingStrategyModule { }
