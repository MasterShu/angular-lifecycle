import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-newchild',
  templateUrl: './newchild.component.html',
  styleUrls: ['./newchild.component.css']
})
export class NewchildComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('child is destroy');
  }

}
