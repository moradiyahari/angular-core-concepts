import {
  Component,
  ContentChildren,
  Directive,
  Input,
  QueryList,
} from '@angular/core';

@Directive({ selector: 'pane' })
export class Pane {
  @Input() id!: string;
}

@Component({
  selector: 'tab',
  template: `
    <div class="top-level">Top level panes: {{serializedPanes}}</div>
    <div class="nested">Arbitrary nested panes: {{serializedNestedPanes}}</div>
  `,
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

@Component({
  selector: 'content-children',
  templateUrl: './content-children.html',
})
export class ContentChildrenComponent {
  shouldShow = false;

  show() {
    this.shouldShow = true;
  }
}
