import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutBalComponent } from './without-bal.component';

describe('WithoutBalComponent', () => {
  let component: WithoutBalComponent;
  let fixture: ComponentFixture<WithoutBalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutBalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutBalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
