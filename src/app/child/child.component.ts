import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input()
  greeting: string;

  @Input()
  user: {name: string};

  message: string = 'init';

  constructor() { }

  ngOnInit() {
  }

  // 仅对变化的 input 有检测
  ngOnChanges(changes: SimpleChanges) {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log(JSON.stringify(changes, null, 2));
  }

}
