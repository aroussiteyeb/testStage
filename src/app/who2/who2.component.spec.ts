import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Who2Component } from './who2.component';

describe('Who2Component', () => {
  let component: Who2Component;
  let fixture: ComponentFixture<Who2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Who2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Who2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
