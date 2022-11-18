import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Who1Component } from './who1.component';

describe('Who1Component', () => {
  let component: Who1Component;
  let fixture: ComponentFixture<Who1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Who1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Who1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
