import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithBalComponent } from './with-bal.component';

describe('WithBalComponent', () => {
  let component: WithBalComponent;
  let fixture: ComponentFixture<WithBalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithBalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithBalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
