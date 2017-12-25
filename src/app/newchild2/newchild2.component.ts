import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-newchild2',
  templateUrl: './newchild2.component.html',
  styleUrls: ['./newchild2.component.css']
})
export class Newchild2Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('child2 is destroy');
  }


}
