import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newchild2Component } from './newchild2.component';

describe('Newchild2Component', () => {
  let component: Newchild2Component;
  let fixture: ComponentFixture<Newchild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newchild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
