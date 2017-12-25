import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  greeting: string = 'hello';
  user: {name: string} = {name: 'Jerry'};
  message: 'go ahead';
}
