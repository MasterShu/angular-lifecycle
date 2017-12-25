import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { V4MAPPED } from 'dns';
import { ViewchildComponent } from './viewchild/viewchild.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild('child1')
  child1: ViewchildComponent;

  title = 'app';
  greeting = 'hello';
  user: {name: string} = {name: 'Jerry'};
  message: string = 'go ahead';

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    setInterval(() => {
      this.child1.greeting('Tom');
    }, 5000);
  }

  // 调用该方法, 也必须注意性能问题
  ngAfterViewChecked(): void {
    console.log('parent component checked done');
    // setTimeout(() => {
    //   this.modifyMessage();
    // }, 0);
  }
  ngAfterViewInit(): void {
    console.log('parent component init done');
    // this.message = 'hello';
  }

  modifyMessage (): void {
    this.message = 'byebye';
  }
}
