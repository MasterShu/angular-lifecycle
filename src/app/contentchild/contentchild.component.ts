import { Component, OnInit, AfterContentChecked, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-contentchild',
  templateUrl: './contentchild.component.html',
  styleUrls: ['./contentchild.component.css']
})
export class ContentchildComponent implements OnInit, AfterContentChecked, AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log('child projected init done');
  }
  ngAfterContentChecked(): void {
    console.log('child projected checked done');
  }

}
