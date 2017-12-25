import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit, AfterViewInit, AfterViewChecked {

  constructor() { }

  ngOnInit() {
  }

  greeting(name: string) {
    console.log('Hello' + name);
  }

  ngAfterViewChecked(): void {
    console.log('child component checked done');
  }
  ngAfterViewInit(): void {
    console.log('child component init done');
  }

}
