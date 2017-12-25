import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LifeComponent } from './life/life.component';
import { ChildComponent } from './child/child.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ContentchildComponent } from './contentchild/contentchild.component';


@NgModule({
  declarations: [
    AppComponent,
    LifeComponent,
    ChildComponent,
    ViewchildComponent,
    ContentchildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
