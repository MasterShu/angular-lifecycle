import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  greeting: string;

  @Input()
  user: {name: string};

  message: string = 'init';
  oldUsername: string;
  changeDetected = false;
  noChangeCount = 0;

  constructor() { }

  ngOnInit() {
  }

  // 仅对变化的 input 有检测
  ngOnChanges(changes: SimpleChanges) {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log(JSON.stringify(changes, null, 2));
  }

  // 变更检测一定要谨慎, 必须轻量级使用,
  ngDoCheck(): void {
    // tslint:disable-next-line:max-line-length
    // Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    // Add 'implements DoCheck' to the class.
    if (this.user.name !== this.oldUsername) {
      this.changeDetected = true;
      console.log('DoCheck: user.name 从' + this.oldUsername + '变为' + this.user.name);
      this.oldUsername = this.user.name;
    }

    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      this.noChangeCount = this.noChangeCount + 1;
      console.log('Docheck: user.name 没变化是 ngDocheck 方法已经被调用' + this.noChangeCount);
    }
    this.changeDetected = false;
  }
}
