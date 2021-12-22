import { Component, ContentChildren, QueryList } from '@angular/core';
import { Pane } from '../pane/pane.directive';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
})
export class Tab {
  @ContentChildren(Pane) topLevelPanes!: QueryList<Pane>;
  @ContentChildren(Pane, { descendants: true })
  arbitraryNestedPanes!: QueryList<Pane>;

  get serializedPanes(): string {
    return this.topLevelPanes
      ? this.topLevelPanes.map((p) => p.id).join(', ')
      : '';
  }
  get serializedNestedPanes(): string {
    return this.arbitraryNestedPanes
      ? this.arbitraryNestedPanes.map((p) => p.id).join(', ')
      : '';
  }
}
