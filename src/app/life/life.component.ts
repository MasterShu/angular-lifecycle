import {
  Component,
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  DoCheck,
  SimpleChanges,
  Input,
  AfterContentChecked
} from '@angular/core';
import {  } from '../../../node_modules/_@angular_core@5.1.2@@angular/core/src/metadata/lifecycle_hooks';

let logIndex = 1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit,
  OnChanges,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  DoCheck,
  AfterContentChecked {

  @Input()
  name: string;

  logIt(msg: string) {
    console.log(`#${logIndex++} ${msg}`);
  }
  ngDoCheck(): void {
    this.logIt('ngDoCheck');
  }
  ngOnDestroy(): void {
    this.logIt('ngOnDestroy');
  }
  ngAfterViewInit(): void {
    this.logIt('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    this.logIt('ngAfterViewChecked');
  }
  ngAfterContentInit(): void {
    this.logIt('ngAfterContentInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    let name;
    name = changes['name'].currentValue;
    this.logIt('name属性在 ngOnChanges 中值为' + name);
  }
  ngAfterContentChecked(): void {
    this.logIt('ngAfterContentChecked');
  }

  constructor() {
    this.logIt('name属性在 constructor 中值为' + name);
  }

  ngOnInit() {
    this.logIt('ngOnInit');
  }

}
