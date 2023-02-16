import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {

  public selected = false;

  public div = 1;

  public scroll;

  constructor(
    private renderer: Renderer2,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,) {}

  ngOnInit(): void {
    this.renderer.listen(window, 'scroll', ($event) => {
      this.scroll = (window.scrollY / this.div);
   })
  }

  public scrollTop(): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.top'
    });
  }

}
