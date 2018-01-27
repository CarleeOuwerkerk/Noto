import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrowbackStartComponent } from './throwback-start.component';

describe('ThrowbackStartComponent', () => {
  let component: ThrowbackStartComponent;
  let fixture: ComponentFixture<ThrowbackStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrowbackStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrowbackStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
