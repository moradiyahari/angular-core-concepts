import { Component, ContentChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'project-content2',
  templateUrl: './project-content2.html',
  styleUrls: ['./project-content2.css'],
})
export class ProjectContent2Component {
  @ContentChild('header') projectContentHeader: ElementRef;

  constructor(private renderor: Renderer2) {
    //returns undfined
    console.log(
      'ProjectContent2->',
      'constructor->',
      this.projectContentHeader
    );
  }

  ngOnChanges() {
    //first time returns undfined
    console.log(
      'ProjectContent2->',
      'ngOnChanges->',
      this.projectContentHeader
    );
  }

  ngOnInit() {
    //returns undfined
    console.log('ProjectContent2->', 'ngOnInit->', this.projectContentHeader);
  }

  ngDoCheck() {
    //first time returns undfined
    console.log('ProjectContent2->', 'ngDoCheck->', this.projectContentHeader);
  }

  ngAfterContentInit() {
    //Header is available here
    console.log(
      'ProjectContent2->',
      'ngAfterContentInit->',
      this.projectContentHeader.nativeElement.innerHTML
    );
    //this.renderor.setStyle(this.projectContentHeader.nativeElement,"font-size","30px")
    //this.projectContentHeader.nativeElement.innerHTML="<h3>Test Update</h3>"
  }

  ngAfterContentChecked() {
    //Header is available here
    console.log(
      'ProjectContent2->',
      'ngAfterContentChecked->',
      this.projectContentHeader.nativeElement.innerHTML
    );
  }

  ngAfterViewInit() {
    //Header is available here
    console.log(
      'ProjectContent2->',
      'ngAfterViewInit->',
      this.projectContentHeader.nativeElement.innerHTML
    );
  }

  ngAfterViewChecked() {
    //Header is available here
    console.log(
      'ProjectContent2->',
      'ngAfterViewChecked->',
      this.projectContentHeader.nativeElement.innerHTML
    );
  }
}
