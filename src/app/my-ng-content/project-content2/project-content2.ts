import { Component, ContentChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'project-content2',
  templateUrl: './project-content2.html',
  styleUrls: ['./project-content2.css'],
})
export class ProjectContent2Component {
  @ContentChild('header') projectContentHeader: ElementRef;

  constructor(private renderor: Renderer2) {
    console.log('ProjectContent2', 'constructor', this.projectContentHeader);
  }
}
