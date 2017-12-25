import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LifeComponent } from './life/life.component';
import { ChildComponent } from './child/child.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ContentchildComponent } from './contentchild/contentchild.component';
import { NewchildComponent } from './newchild/newchild.component';
import { Newchild2Component } from './newchild2/newchild2.component';

const routerConfig: Routes = [
  {path: '', component: NewchildComponent},
  {path: 'child2', component: Newchild2Component},
];

@NgModule({
  declarations: [
    AppComponent,
    LifeComponent,
    ChildComponent,
    ViewchildComponent,
    ContentchildComponent,
    NewchildComponent,
    Newchild2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
